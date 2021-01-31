import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	const { cart, data } = useSelector((state) => ({
		cart: state.cart,
		data: state.data,
	}));

	let total = 0;
	Object.keys(cart).map((p, keyIndex) => (total += cart[p].qty));
	console.log(total);

	return (
		<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
			<Link className="navbar-brand" to="/">
				Shoply
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item navbar-brand">
						<a className="nav-link" href="#">
							<i className="fas fa-shopping-cart">
								<h6 id="cart-count-wrapper">
									<span class="badge badge-pill badge-danger ml-2">
										<b>{total}</b>
									</span>
								</h6>
							</i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
