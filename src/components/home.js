import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='home-container'>
                 <h2>Home Page</h2>
                 <Link to='/contacts'>
                 <button>Contact List</button>
                 </Link>
                 <Link to='/addContact'>
                 <button>Add Contact</button>
                 </Link>
        </div> );
    }
}
 
export default Home;