import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class AddContact extends Component {
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

    addContact=()=>
    {
        this.props.addReducer({...this.state,_id:Math.random()*1000+''})
    }
    render() { 
        return ( <div className='add-contact-container'>
        <h2>Add Contact</h2>
        <h5>Name </h5>
        <input type='text' name='name' onChange={this.handleChange}/>
        <h5>Phone </h5>
        <input type='text' name='phone' onChange={this.handleChange}/>
        <h5>Email </h5>
        <input type='text' name='email' onChange={this.handleChange}/><br/>
        <Link to='/contacts'>
        <button onClick={this.addContact}>Add Contact</button>
        </Link>

        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>
{
     return {
         addReducer:newcontact=>
         {
             dispatch({
                 type:'ADD_CONTACT',
                 newcontact
             })

         }
     }
}
 
export default connect(null,mapDispatchToProps)(AddContact);