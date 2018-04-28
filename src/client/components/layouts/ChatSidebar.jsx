import React, { Component } from "react"
import SearchBar from "../inputs/SearchBar.jsx"
import NewBtn from "../buttons/NewBtn.jsx"
import ChatItem from "../lists/ChatSidebar/ChatItem.jsx"
import "./ChatSidebar.scss"

// dummy info
const dummySidebar = {
	chats: [
		{
			firstName: "Ashar",
			lastName: "Ahmed",
			profilePic: {
				url: "https://pbs.twimg.com/profile_images/912500537500815362/ZSxLvTCw_400x400.jpg"
			},
			lastMessage: { 
				body: "lol die",
				time: 1524717615
			}
		}
	]
}

export default class ChatSidebar extends Component {
	constructor() {
		super()
		this.state = {
			dragging: false,
			dragOffset: 0,
			width: 300,
			screen: false
		}
	}
	_onDragStart(e) {
		this.setState({
			dragging: true,
			dragOffset: 0,
			screen: true
		})
	}
	_onDrag(e) {
		if(!this.state.dragging) return
		if(this.state.dragOffset == 0) return this.setState({dragOffset: e.pageX})
		let distance = e.pageX - this.state.dragOffset
		let newWidth = this.state.width + distance
		newWidth = newWidth > 250 ? newWidth : 250
		newWidth = newWidth < 500 ? newWidth : 500
		this.setState({width: newWidth, dragOffset: e.pageX})
	}
	_onDragEnd(e) {
		this.setState({
			dragging: false,
			dragOffset: 0,
			screen: false
		})
	}
	render() {
		return (
			<div className="chat-sidebar-wrapper" style={{
				width: `${this.state.width}px`
			}}>
				<div className={`${this.state.screen ? "screen" : "screen hidden"}`} 
											 onMouseMove={this._onDrag.bind(this)}
											 onMouseUp={this._onDragEnd.bind(this)}
											 onMouseLeave={this._onDragEnd.bind(this)}
											 onContextMenu={this._onDragEnd.bind(this)}></div>
				<div className="chat-sidebar">
					<div className="flex-wrapper-fill-content-vert">
						<SearchBar />
						<NewBtn />
					</div>
					<div className="chats-list-wrapper">
						{
							dummySidebar.chats.map((item, i) => <ChatItem data={item}/>)
						}
					</div>
				</div>
				<div className="drag-anchor" onMouseDown={this._onDragStart.bind(this)}>
				</div>
			</div>
		)  
	}
}