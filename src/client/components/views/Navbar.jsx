import React, { Component } from "react"
import { connect } from "react-redux"
import { submitEmail } from "../../actions/newsletterActions"
import "./Navbar.scss"
import Check from "../svg/Check";
import CircleSpinner from "../svg/CircleSpinner";

@connect((store) => {
	return {
		newsletter: store.newsletter
	}
})
export default class Navbar extends Component {
	constructor() {
		super()
		this.state = {}
	}
	componentDidMount() {
		console.log(this.props.newsletter)
	}
	_emailSubmit(e) {
		e.preventDefault()

		let email = e.target.email.value
		if(!email || !email.includes("@") || !email.includes(".")) return
		console.log("good!")
		this.props.dispatch(submitEmail(email))

	}
	render() {
		return (
			<div className="navbar-wrapper">
				<div className="logo-wrapper">
					<div className="logo-shadow"></div>
				</div>
				<div className="right-aligned-links">
					<div className="links-desktop">
						{
							[
							].map((item, i) => (
								<div className="link-wrapper">
									<a href={item.link} onClick={item.action ? item.action : null} className={item.filled ? "link filled" : "link"}>{item.name}</a>
								</div>
							))
						}
						<div className="newsletter-wrapper">
							<form onSubmit={this._emailSubmit.bind(this)}>
								<div className={this.props.animTriggered ? "newsletter-inner triggered" : "newsletter-inner"}>
									<div className="link-wrapper">
										<input type="email" name="email" className="input slim" placeholder="ENTER AN EMAIL" />
									</div>
									<div className="link-wrapper">
										<button disabled={this.props.loading ? true : false} type="submit" href="#" onClick={()=>{}} className="link filled no-padding">
											<div className="button-steps-container">
												<div className="button-step-wrapper">
													<div className={"step-container initial " + ((!this.props.newsletter.loading) && (!this.props.newsletter.completed) ? "active" : "")}>
														<span>Get Notified</span>
													</div>
												</div>
												<div className="button-step-wrapper icon-padding">
													<div className={"step-container loading " + (this.props.newsletter.loading ? "active" : "")}>
														<CircleSpinner />
													</div>
												</div>
												<div className="button-step-wrapper icon-padding">
													<div className={"step-container success " + (this.props.newsletter.completed ? "active" : "")}>
														<Check animated={true}/>
													</div>
												</div>
											</div>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="links-mobile">
						<div className="link-wrapper">
							<a href="#" className="link">Menu</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}