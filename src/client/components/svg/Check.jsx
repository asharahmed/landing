import React, { Component } from "react"
import "./Check.scss"

export default class Check extends Component {
    render() {
        return (
            <svg
                viewBox="0 0 500 500"
                className="svg-check-mark-wrapper"
                >
                <polyline className={this.props.animated ? "svg-check-mark-line animated": "svg-check-mark-line"} points="28.2,311.2 135.2,418.2 471.8,81.8 "/>
            </svg>
        ) 
    }
}