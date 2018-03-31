import React, { Component } from "react"
import "./MainView.scss"

import InterlockedBubbles from "../svg/InterlockedBubbles.jsx"

export default class MainView extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="flex-container-vert-center">
                <div className="flex-container-horiz-center">
                    <div className="svg-viewport">
                        <InterlockedBubbles />
                    </div>
                    <span className="main-view-sub-text">Nothing here...</span>
                </div>
            </div>
        )
    }
}