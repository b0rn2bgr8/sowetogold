import React, { Component } from "react";
import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import Admin from './layouts/Dashboard/Dashboard';
import Navs from './components/Navs/Navs';
import * as actions from './actions';
import {connect} from 'react-redux';

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        const AdminRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              (this.props.user.role === "admin")
                ?  <Component  {...props} /> 
                : <Redirect to='/admin/' />
            )} />
          );

        return (
            <div>
                <Router>
                    <div>
                        <Navs user={this.props.user} />
                        <Route path="/" exact component={Home} />
                        <AdminRoute path="/admin" component={Admin} />
                        
                    </div>
                </Router>
            </div>
            )
        }
}

function mapStateToProp(state){
    return {
        user: state.auth
    }
}

export default connect(mapStateToProp, actions)(App);