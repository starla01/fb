import React, { Component } from 'react';
import Cart from './cart.jsx';
export default class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="header" className="header">
				<Cart />
			</div>
		)
	}
}
