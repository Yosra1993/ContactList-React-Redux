import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ConatctItem from './contactItem'

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.contacts)
        const {contacts}=this.props
        return ( <div className='contact-list-container'>
        <h2>Contact List</h2>
        <div className='contact-list-container1'>
        {
            contacts.map((el,index)=><ConatctItem item={el} key={index}/>)
        }
                  
                  
        </div>
        <Link to='/'>
        <button>Home</button>
        </Link>
        </div> );
    }
}

const mapStateToProps=(state)=>
{  return {
    contacts:state.contactReducer
}
}
 
export default connect(mapStateToProps)(ContactList);