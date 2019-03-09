import React, { Component } from "react"
import "./MainLayout.scss"

import { 
	BrowserRouter as Router, 
	Switch,
	Route,
	Link 
} from "react-router-dom"
import { connect } from "react-redux"
import MainView from "../views/MainView.jsx"
import Navbar from "../views/Navbar.jsx"
import { highlightEmailField, unHighlightEmailField } from "../../actions/animationsActions"

@connect(store => {
	return {

	}
})
export default class MainLayout extends Component {
	constructor() {
		super()
		this.state = {
			animTriggered: false
		}
	}
	render() {
		return (
			<div className="main-app-wrapper">
				<Navbar animTriggered={this.state.animTriggered} />
				<Route path="/" component={MainView} />
			</div>
		)
	}
}