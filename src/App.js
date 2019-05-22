import React, {Component} from 'react';

import ResponsiveMenu from 'react-responsive-navbar';

class App extends Component{
	constructor(props) {
    super(props);
	}
	render()  {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="#" onClick={this.burgerToggle}>Link 1</a>
						<a href="#" onClick={this.burgerToggle}>Link 2</a>
						<a href="#" onClick={this.burgerToggle}>Link 3</a>
					</div>
				</div>
			</nav>
		);
	}
	burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block')
			linksEl.style.display = 'none';
		else 
			linksEl.style.display = 'block';
		
	}
}



/*
class App extends Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      />
    );
  }
}
/*
function App() {
  return (
    <div className="App">
	<h1> Manuel Francisco Flores Cacho</h1>
	<p> Welcome to my Page!</p>
    </div>
	
	<ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      />
  );
}
*/
export default App;

