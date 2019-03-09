import React, { Component } from "react"
import "./MainView.scss"

import Feature from "../displays/Feature.jsx"

export default class MainView extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="main-view-wrapper">
				<div className="slice-wrapper blue center horizontal hero-banner">
					<div className="slice-inside">
						<div className="details">
							<p className="main-text-hero">
								Welcome to (secure) messaging for the modern era.
							</p>
							<div className="link-wrapper">
								<a href="#" onClick={e => { e.preventDefault(); this.props.ctaClick(); }} className="link">Get notified when we release</a>
							</div>
						</div>
						<div className="image-hero-wrapper">
							<div className="image-hero"></div>
						</div>
					</div>
				</div>
				<div className="slice-wrapper center vertical responsive">
					<div className="slice-inside vertical">
						<div className="header-span-wrapper">
							<span className="header-span">Flik's got all the best features.</span>
						</div>
						<div className="features-grid">
							{
								[
									{
										icon: "/dist/img/flik-secure-white.svg",
										header: "Secure",
										description: "Flik uses leading encryption algorithms to ensure all your chats are safe from prying eyes: the government, your neighbor, and even your cat."
									},
									{
										icon: "/dist/img/flik-cloud-white.svg",
										header: "Cloud-synced",
										description: "Flik stores all your messages, fully encrypted, in the cloud, meaning they are available on all devices simultaneously."
									},
									{
										icon: "/dist/img/flik-ui-white.svg",
										header: "Simple",
										description: "Flik's app is super easy and fun to use. In addition, it is available on iOS, Android, Windows, macOS, Linux, and even on the web."
									}
								].map((i, index) => (
									<div className="animated-feature" style={{
										animationDelay: (0.05 * index) + "s"
									}}>
										<Feature 
											icon={i.icon}
											header={i.header}
											description={i.description}
										></Feature>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}