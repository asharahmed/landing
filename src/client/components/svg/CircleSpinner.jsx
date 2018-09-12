import React, { Component } from "react"
import "./CircleSpinner.scss"

export default class CircleSpinner extends Component {
    render() {
        return (
            <svg
                viewBox="0 0 500 500"
                className="svg-circle-spinner-wrapper"
                >
                <circle className="svg-circle-spinner-line" cx="250" cy="250" r="213"/>
            </svg>
        ) 
    }
}