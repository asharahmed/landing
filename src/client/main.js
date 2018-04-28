import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, 
		 Switch,
		 Route,
		 Link } from "react-router-dom"

import MainLayout from "./components/layouts/MainLayout.jsx"
import "./main.scss"

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

ReactDOM.render(<Main />, document.getElementById("app"))