import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class Sidebar extends React.Component{

    constructor(){
        super();
    }

    render(){
    return(
        <div>
            <Router>
            <ul>
                <li><Link to="/Users">User Management</Link></li>
                <li><Link to="/Users/Add">User Add</Link></li>
                <li><Link to="/Users/Edit/1">User Edit</Link></li>
            </ul>
            </Router>
        </div>
    )    
    }
}

export default Sidebar;