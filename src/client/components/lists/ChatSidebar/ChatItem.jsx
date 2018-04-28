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
			<div className="chats-list-item-wrapper">
				<div className="chats-list-item-flex-wrapper">
					<div className="chats-list-item-flex-pfp-wrapper">
						<div className="chats-list-item-flex-pfp"
							style={{
								backgroundImage: `url(${this.props.data.profilePic.url})`
							}}
						></div>
					</div>
					<div className="chats-list-item-flex-details">
						<span className="chats-list-item-flex-details-name">{`${this.props.data.firstName} ${this.props.data.lastName}`}</span>
					</div>
				</div>
			</div>
		)
	}
}