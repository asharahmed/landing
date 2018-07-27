import React, { Component } from "react"
import "./Feature.scss"

export default class Feature extends Component {
    render() {
        const { icon, header, description } = this.props
        return (
            <div className="feature">
                <div className="feature-circle-wrapper">
                    <div className="feature-circle-image"
                        style={{
                            backgroundImage: `url("${icon}")`
                        }}
                        >
                    </div>
                </div>
                <div className="feature-header-span-wrapper">
                    <span className="feature-header-span">{ header }</span>
                </div>
                <div className="feature-description-wrapper">
                    <p className="feature-description">
                        { description }
                    </p>
                </div>
            </div>
        )
    }
}