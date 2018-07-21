import React, { Component } from "react"
import "./MainLayout.scss"

import Navbar from "../views/Navbar.jsx"

export default class MainView extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="main-app-wrapper">
				<Navbar />
			</div>
		)
	}
}