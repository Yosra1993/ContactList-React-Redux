import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',
                       phone:'',
                       email:'' }
    }
    handleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    componentDidMount() {
        
        this.setState({
            ...this.props.contacts.filter((el)=>(el._id===this.props._id))[0]
        })
    }
    editContact=()=>
    {
        this.props.editReducer({...this.state})
    }
    render() { 
        
        return  ( <div className='add-contact-container'>
        <h2>Edit Contact</h2>
        <h5>Name </h5>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        <h5>Phone </h5>
        <input type='text' name='phone'  value={this.state.phone}  onChange={this.handleChange}/>
        <h5>Email </h5>
        <input type='text' name='email'  value={this.state.email}  onChange={this.handleChange}/><br/>
        <Link to='/contacts'>
        <button onClick={this.editContact}>Edit Contact</button>
        </Link>

        </div>  );
    }
}
const mapStateToProps=(state)=>
{  return {
    contacts:state.contactReducer
}
}
const mapDispatchToProps=(dispatch)=>
{
     return {
         editReducer:editcontact=>
         {
             dispatch({
                 type:'EDIT_CONTACT',
                 editcontact
             })

         }
     }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditContact);