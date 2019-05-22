import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Container, Jumbotron } from 'reactstrap';

class TopName extends Component{
	constructor(props) {
    super(props);
  }

  render() {
    return (
		<div clasName="TopNameClass">
			<h1>Manuel Flores Cacho</h1>
			<p>
			This is just a brief introduction of my self
			Feel free to see some of my projects and information about what 
			I have done previously for my self or for others.
			</p>
		</div>
    );
  }
}
export default TopName;

