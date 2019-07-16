import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './home'
import ContactList from './contactList'
import AddContact from './addContact'
import EditContact from './editContact'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='routes-container'>
                 <Route exact path='/' component={Home}/>   
                 <Route exact path='/contacts' component={ContactList}/>
                 <Route exact path='/addContact' component={AddContact}/>
                 <Route exact path='/editContact/:_id' 
                 render={(props)=><EditContact _id={props.match.params._id}/>} />

        </div> );
    }
}
 
export default Routes;