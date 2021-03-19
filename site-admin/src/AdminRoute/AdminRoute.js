import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import UserList from '../Sections/Users/UserList';
import UserAdd from '../Sections/Users/UserAdd';
import UserEdit from '../Sections/Users/UserEdit';
import Dashboard from '../Sections/Dashboard/Dashboard';
import Login from '../Sections/Login/Login';

class AdminRoute extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                {/* <Route path="/Users" component={UserList}/> */}
                <Route
                    path="/Users"
                    render={({ match: { url } }) => (
                    <>
                    <Route path={`${url}/`} component={UserList} exact />
                    <Route path={`${url}/Add`} component={UserAdd} exact/>
                    <Route path={`${url}/Edit/:id`} component={UserEdit} exact/>
                    </>
                    )}
                />

                    {/* <Route exact path="/Users/Add" component={UserAdd}/>                  
                    <Route exact path="/Users/Edit" component={UserEdit} />  */}

                <Route path="/Dashboard" component={Dashboard}/>                 
            </Switch>
        </Router>
        )    
    }
}

export default AdminRoute; 