import React, { Component } from "react"
import "./MainView.scss"

export default class MainView extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="main-view-wrapper">
				<div className="slice-wrapper">
					<div className="slice-inside">
						<div className="details">
							<p className="main-text-hero">
								Welcome to (secure) messaging for the future.
							</p>
							<div className="link-wrapper">
								<a href="#" className="link">Get it now</a>
							</div>
						</div>
						<div className="image-hero-wrapper">
							<div className="image-hero"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}