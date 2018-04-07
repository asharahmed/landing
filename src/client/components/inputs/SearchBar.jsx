import React, { Component } from "react"
import "./SearchBar.scss"

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <div className="search-bar-wrapper"
                style={this.props.style || {}}>
                <input 
                    className="search-bar-input"
                    placeholder={this.props.placeholder || "Search"} />
            </div>
        )
    }
}