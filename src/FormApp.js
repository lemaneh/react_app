import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Button } from 'reactstrap';


class FormApp extends Component{
	
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
        <form action="https://docs.google.com/forms/d/e/1u3lXCMDIX6jq5IYkcoi832JR9bOi9jdXG4a1-fB6lGw/formResponse" method="POST">
    <p>
        <label for="g-form-input-">Tu direcci�n de correo electr�nico</label>
        <input id="g-form-input-" type="email" name="emailAddress" autocomplete="email" required />
    </p>
    <p>
        <label for="g-form-input-1">Texto</label>
        <input id="g-form-input-1" type="text" name="entry.1542505023" autocomplete="off" />
    </p>
    <p>
        <label for="g-form-input-2">Parrafo</label>
        <textarea id="g-form-input-2" name="entry.2048127791"></textarea>
    </p>
    <p>
 
        <input id="g-form-input-3" type="hidden" value="2016" name="entry.1654277772_year" />
    </p>
    <p>
 
        <input id="g-form-input-7" type="hidden" value="-8042869601822691385" name="fbzx" />
    </p>
    <input type="submit" name="submit" value="Send" />
		</form>
    </div>
    );
  }
}
export default FormApp;

