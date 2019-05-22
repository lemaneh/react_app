import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Container, Jumbotron } from 'reactstrap';
import Kwic from './Kwic';
import Welcomecontent from './WelcomeContent';


class BodyApp extends Component{
	constructor(props) {
    super(props);
  }

  render() {
    return (
		<div className="bodyType">
		<Welcomecontent />
		<Kwic/>
		</div>
    );
  }
}
export default BodyApp;

