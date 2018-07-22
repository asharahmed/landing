import React, { Component } from "react"
import "./MainLayout.scss"

import { BrowserRouter as Router, 
	Switch,
	Route,
	Link } from "react-router-dom"
import MainView from "../views/MainView.jsx"
import Navbar from "../views/Navbar.jsx"

export default class MainLayout extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="main-app-wrapper">
				<Navbar />
				<Route path="/" component={MainView} />
			</div>
		)
	}
}