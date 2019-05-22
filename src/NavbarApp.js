import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import TopName from './TopName';
import Body from './Body';


class NavbarApp extends Component{
	constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
    <div>
        <Navbar sticky="top" light>
          <NavbarBrand href="/" className="mr-auto"><img id="logoImage" src={require('./images/nameLogo.png')} /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="toggle" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/Examples/"><h2>Examples</h2></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/manuelffc"><h2>GitHub</h2></NavLink>
              </NavItem>
			  <NavItem>
                <NavLink href="https://drive.google.com/file/d/1WTYXv4JPTBc2Wbfoj9mfRxhs67Zg81-A/view?usp=sharing"><h2>Resume</h2></NavLink>
              </NavItem>
			  <NavItem>
                <NavLink href=""><h2>Contact</h2></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
		<Body/>
    </div>
    );
  }
}
export default NavbarApp;

