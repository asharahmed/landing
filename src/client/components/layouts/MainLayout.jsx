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
		this.state = {
			animTriggered: false
		}
	}
	_ctaClick() {
		document.querySelector("html").scrollTop = 0;
		this.setState({animTriggered: true})
		setTimeout(() => this.setState({animTriggered: false}), 1000)
	}
	render() {
		return (
			<div className="main-app-wrapper">
				<Navbar animTriggered={this.state.animTriggered} />
				<Route path="/" component={() => <MainView ctaClick={this._ctaClick.bind(this)} />} />
			</div>
		)
	}
}