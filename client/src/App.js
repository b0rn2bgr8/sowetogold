import React, { Component } from "react";
import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import Admin from './layouts/Dashboard/Dashboard';
import * as actions from './actions';
import {connect} from 'react-redux';

//Pages
import Home from './views/Home/Home/Home_Frontend';
import entertainment from './views/Home/entertainment/entertainment'
import news from './views/Home/news/news';
import video from './views/Home/video/video';
import Sport from './views/Home/Sport/Sport';
import Soccer from './views/Home/Sport/Soccer';
import Cricket from './views/Home/Sport/Cricket';
import Rugby from './views/Home/Sport/Rugby';
import Hockey from './views/Home/Sport/Hockey';
import Netball from './views/Home/Sport/Netball';
import Other_Sports from './views/Home/Sport/Other_Sports';
import Classified from './views/Home/classified/Classified';
import Job from './views/Home/classified/Job';
import Business from './views/Home/classified/Business';
import Other from './views/Home/classified/Other';
import Property from './views/Home/classified/Property';
import communityService from './views/Home/communityService/communityService';
import AboutUs from './views/Home/AboutUs/AboutUs';
import contact from './views/Home/contact/contact';

// Components
import Navs from './components/Navs/Navs';
import Navbar1 from './components/Navbars/Navbar1';
import Footer from './components/Footer/Footer';
import SimpleSlider from "./components/Slider/Slider";


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
                        {/* <Navbar1 user={this.props.user} /> */}
                      
                        <Route path="/Home"  component={Home} />
                        <Route path="/news"   component={news} />
                        <Route path="/entertainment"  component={entertainment} />
                        <Route path="/video"  component={video} />

                        <Route path="/Sport"  component={Sport} />
                        <Route path="/Soccer"  component={Soccer} />
                        <Route path="/Cricket"  component={Cricket} />
                        <Route path="/Rugby"  component={Rugby} />
                        <Route path="/Netball"  component={Netball} />
                        <Route path="/Hockey"  component={Hockey} />
                        <Route path="/Other_Sports"  component={Other_Sports} />

                        <Route path="/Classified" component={Classified} />
                        <Route path="/Job" component={Job} />
                        <Route path="/Property" component={Property} />
                        <Route path="/Business" component={Business} />
                        <Route path="/Other" component={Other} />

                        <Route path="/communityService"  component={communityService} />
                        <Route path="/AboutUs"  component={AboutUs} />
                        <Route path="/contact"  component={contact} />

                        {/* <Footer user={this.props.user} /> */}
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