import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import { BrowserRouter as Router, 
		 Switch,
		 Route,
		 Link } from "react-router-dom"

import MainLayout from "./components/layouts/MainLayout.jsx"
import "./main.scss"

// string truncuate
String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };

class Main extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={MainLayout} />
				</Switch>
			</Router>
		)
	}
}

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById("app"))