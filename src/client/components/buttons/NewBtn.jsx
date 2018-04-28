import React, { Component } from "react"
import "./NewBtn.scss"

export default class NewBtn extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className="round-btn">
				<span>+</span>
			</div>
		)
	}
}