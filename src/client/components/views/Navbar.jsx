import React, { Component } from "react"
import "./Navbar.scss"

export default class Navbar extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="navbar-wrapper">
				<div className="logo-wrapper">
					<div className="logo-shadow"></div>
				</div>
				<div className="right-aligned-links">
					{
						[
							{
								name: "Home",
								link: "/",
								filled: false
							},
							{
								name: "About",
								link: "/about",
								filled: false
							},
							{
								name: "Support",
								link: "/support",
								filled: false
							},
							{
								name: "Login",
								link: "/login",
								filled: false
							},
							{
								name: "Signup",
								link: "/signup",
								filled: true
							}
						].map((item, i) => (
							<div className="link-wrapper">
								<a href={item.link} className={item.filled ? "link filled" : "link"}>{item.name}</a>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}