import React, { Component } from "react"
import "./SidebarLayout.scss"
import { BrowserRouter as Router, 
         Switch,
         Route,
         Link } from "react-router-dom"

import ChatSidebar from "./ChatSidebar.jsx"
import MainView from "../views/MainView.jsx"

export default class SidebarLayout extends Component {
    render() {
        return (
            <div className="flex-wrapper-fill-content-vert">
                <ChatSidebar />
                <Switch>
                    <Route exact path="/" component={MainView} />
                </Switch>
            </div>
        )
    }
}