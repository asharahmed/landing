import React, { Component } from "react"
import "./MainLayout.scss"
import { BrowserRouter as Router, 
		 Switch,
		 Route,
		 Link } from "react-router-dom"

import SidebarLayout from "./SidebarLayout.jsx"

export default class MainLayout extends Component {
	constructor() {
		super()
		this.state = {
			
		}
	}
	render() {
		return (
			<div className="main-app-wrapper">
				<div className="flex-wrapper-vert">
					<div className="main-titlebar-wrapper">
						<div className="main-titlebar-logo"></div>
					</div>
					<Switch>
						<Route path="/" component={SidebarLayout} />
					</Switch>
				</div>
			</div>
		)
	}
}