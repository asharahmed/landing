import React, { Component } from "react"
import moment from "moment"
import "moment-timezone"
import "./ChatItem.scss"

export default class ChatItem extends Component {
	constructor() {
		super()
		this.state = {
			time: "0:00"
		}
	}
	componentDidMount() {
		const { data } = this.props
		const timeISO = new Date(0)
		timeISO.setUTCSeconds(data.lastMessage.time)
		const time = moment.utc(timeISO.toISOString())
		this.setState({time: time.local().format('h:mm')})
	}
	render() {
		return (
			<div className={this.props.data.active ? "chats-list-item-wrapper active" : "chats-list-item-wrapper"}>
				<div className="chats-list-item-flex-wrapper">
					<div className="chats-list-item-flex-pfp-wrapper">
						<div className="chats-list-item-flex-pfp"
							style={{
								backgroundImage: `url(${this.props.data.profilePic.url})`
							}}
						></div>
					</div>
					<div className="chats-list-item-flex-details">
						<div className="details-time">
							<span className="details-time-span">{this.state.time}</span>
						</div>
						<div className="details-wrapper">
							<span className="chats-list-item-flex-details-name">{`${this.props.data.firstName} ${this.props.data.lastName}`}</span>
							<span className="chats-list-item-flex-last-message">{`${this.props.data.lastMessage.body.trunc(25)}`}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}