import React, { Component } from "react"
import "./SearchBar.scss"

export default class SearchBar extends Component {
	constructor() {
		super()
		this.state = {
			value: "",
			showClear: false
		}
	}
	_onChange(e) {
		const { value } = e.target
		let showClear = value.length > 0 ? true : false
		this.setState({
			value,
			showClear
		})
		if(this.props.onChange) this.props.onChange(e)
	}
	clear() {
		this.setState({
			value: "",
			showClear: false
		})
	}
	render() {
		return (
			<div className="search-bar-wrapper"
				style={this.props.style || {}}>
				<input
					onChange={this._onChange.bind(this)}
					value={this.state.value}
					className="search-bar-input"
					placeholder={this.props.placeholder || "Search"} />
				<div 
					onClick={this.clear.bind(this)}
					className={`clear-btn-wrapper ${this.state.showClear ? null : "hidden"}`}>
					<span className="clear-btn-text">+</span>
				</div>
			</div>
		)
	}
}