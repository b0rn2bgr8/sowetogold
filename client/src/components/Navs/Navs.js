import React from 'react';
import {Collapse,Navbar,NavbarToggler, NavbarBrand,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export default class Navs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark color="dark" expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="Soweto Observer Logo" style={{height: 60, width: 'auto'}} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
      
            <NavItem>
                <NavLink to="/" className="nav-link"><i className="fa fa-home"></i> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/category/News" className="nav-link">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/category/entertainment" className="nav-link">Entertainment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/category/sport" className="nav-link">Sport</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/category/community-service" className="nav-link">CommunityService</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/category/Classified" className="nav-link">Classified</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Video" className="nav-link">Video</NavLink>
              </NavItem>


              {/* <NavItem>
                <NavLink to="AboutUs" className="nav-link">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="Contact" className="nav-link">Contact</NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </NavItem> */}
              {(this.props.user.role === "admin") &&<NavItem>
                <NavLink to="/admin" className="nav-link">Manage</NavLink>
              </NavItem>}
              {!this.props.user && <NavItem>
                <a href="/auth/google" className="nav-link">Login</a>
              </NavItem>}
              {this.props.user && <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img src={this.props.user.picture} alt="not supported" style={{height: 20, width: 'auto', borderRadius: 30}} /> {this.props.user.displayName}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  <DropdownItem href="/auth/logout">
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}