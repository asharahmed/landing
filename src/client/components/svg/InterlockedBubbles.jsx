import React, { Component } from "react"
import "./InterlockedBubble.scss"

export default class InterlockedBubbles extends Component {
	render() {
		return (
			<svg viewBox="0 0 560 560" version="1.1">
				<g id="Canvas" transform="translate(364 289)">
				<clipPath id="clip-0" clipRule="evenodd">
				<path d="M -364 -289L 196 -289L 196 271L -364 271L -364 -289Z" fill="#FFFFFF"/>
				</clipPath>
				<g id="Frame" clipPath="url(#clip-0)">
				<path d="M -364 -289L 196 -289L 196 271L -364 271L -364 -289Z" fill="#FFFFFF"/>
				<g id="Rectangle" className="interlocked-bubble ib-1">
				<use xlinkHref="#path0_fill" transform="translate(-364 -289)" fill="#616161" fillOpacity="0.3"/>
				</g>
				<g id="Rectangle" className="interlocked-bubble ib-2">
				<use xlinkHref="#path0_fill" transform="matrix(-1 0 0 1 196 -102.333)" fill="#616161" fillOpacity="0.3"/>
				</g>
				</g>
				</g>
				<defs>
				<path id="path0_fill" d="M 0 186.667C 0 83.5736 83.5735 0 186.667 0C 289.76 0 373.333 83.5735 373.333 186.667C 373.333 289.76 289.76 373.333 186.667 373.333L 19.3103 373.333C 8.64553 373.333 0 364.688 0 354.023L 0 186.667Z"/>
				</defs>
			</svg>
		)
	}
}