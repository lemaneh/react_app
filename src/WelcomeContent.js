import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Button } from 'reactstrap';


class WelcomeContent extends Component{
	
	constructor(props) {
    super(props);
  }
  
  typeWriter = function () {
	var i = 0;
	var txt = "After getting my Bachelor in Electrical and Computer Engineering,I started to code, I started with some PHP and mySQL,Built my first website, and costumer database,from there I just started learning different languages, and technologies.";
	var speed = 50;
	
	  for(var j=0; j<txt.length;j++) {
		setTimeout(function(){
		document.getElementById("introParagraph").innerHTML += txt.charAt(i);
		console.log(document.getElementById("introParagraph").value);
		i++;},8000);
	  }
	}

  render() {
    return (
    <div>
        <Jumbotron>
		  <h3 onClick={this.typeWriter()}>Hello, welcome my Name is Manuel</h3>
		  <p id="introParagraph">
		  </p>
		</Jumbotron>;
    </div>
    );
  }
}
export default WelcomeContent;

