import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Container, Jumbotron } from 'reactstrap';




import * as implementit from './javas.js'; 
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class kwic extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  /*KWIC 
  
  */
  openFile = function (event) {
                var input = event.target;
                var file = input.files[0];
                var textType = /text.*/;
                var outputResponse = document.getElementById('outputResponse');
                var placeFile = document.getElementById('placeFile');
                var stringArray = [];
                var tempLineArray = [];
                var tempArray = [];
                var temp = "";
				var tempLine, outputFile;
                if (file.type.match(textType)) {
                    var read = new FileReader();

                    read.onload = function (e) {
                        // By lines
						var inputTemp = read.result;
						inputTemp = inputTemp.split("\n");  
                        //placeFile.innerHTML = read.result;
						var arrayElement, arrayTempNode;
						for (var i = 0; i < inputTemp.length; i++) {
                            arrayElement = document.createElement("LI");
							arrayTempNode = document.createTextNode(inputTemp[i]);
                            arrayElement.appendChild(arrayTempNode);
                            document.getElementById("placeFile").appendChild(arrayElement);
                        }
                        console.log(read.result)
                        var lines = read.result.split('\n');
                        for (var line = 0; line < lines.length; line++) {
                            tempLine = lines[line].trim().split(" ");
                            for (var index = 0; index < tempLine.length; index++) {
                                if (index == 0)
                                    tempArray = tempLine;
                                else
                                    tempArray = tempLineArray;
                                tempLineArray = [];
                                stringArray.push(tempArray.join(' '));
                                for (var i = 1; i < tempArray.length; i++) {
                                    tempLineArray.push(tempArray[i]);
                                }
                                tempLineArray.push(tempArray[0]);
                                tempArray = [];
                            }
                        }
                        var tempSortedArray = stringArray.sort((a, b) => a.localeCompare(b));;
                        var outputString = tempSortedArray.join(',@@&&^^++==,');
                        outputString = outputString.split(',@@&&^^++==,');

                        var element;
                        var textnode;

                        for (var i = 0; i < outputString.length; i++) {
                            console.log(outputString[i]);
                            element = document.createElement("LI");
                            textnode = document.createTextNode(outputString[i]);
                            element.appendChild(textnode);
                            document.getElementById("placeOutput").appendChild(element);
                        }
                    }
                    read.readAsText(input.files[0]);
                }
                else {
                    outputFile.innerText = "Only Text Files for this version";
                }
            };

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div className="kwicClass">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
	  
	  
	  
        <button id="kwicExampleButton" onClick={this.openModal}>Try the KWIC Example</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Try the KWIC Example"
		  onPressOut={() => {this.setModalVisible(false)}}
		  onRequestClose={() => this.setState({openDialog: false})}
        >		 
		<Jumbotron>
		<button id="closeModal" onClick={this.closeModal}>CLOSE EXAMPLE</button>
			<h3 className="display-4">KWIC Challenge</h3>
			<p className="lead"><ul>
				<li>1) The KWIC index systemaccepts an ordered set of lines, each
				line is an ordered set of words, and each word is an ordered set of characters</li>
				<li>2) Any line may be 'circularly shifted' by repeatedly removing the first word and appending it at the end of the line.</li>
				<li>3) The KWIC index system outputs a listing of all cricular shifts of lines in aphabetical ordered.</li>
			</ul></p>
			<span><h4>Drop your Text  File Here </h4> </span>
			<input id="inputField" type='file' onChange={ (e) => this.openFile(e) }></input>
			<div id='outputFile'>
				<h4 id="insideModalElement">Original file will be printed here</h4>
				<h5 id="insideModalElement">Text Below</h5>
				<ul id="placeFile"></ul>
			</div>
			<span id='outputResponse'>
				<h4 id="insideModalElement">KWIC Response</h4>
				<h5 id="insideModalElement">Text Below</h5>
				<ul id="placeOutput"></ul>
			</span>
			<button id="closeModal" onClick={this.closeModal}>CLOSE EXAMPLE</button>
		</Jumbotron>          
    </Modal>
	</div>
	);
  }
} 



export default kwic;

