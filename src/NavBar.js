import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CountBadge from "./CountBadge";
import "./NavBar.css";

const NavBar = () => {
	const { cart } = useSelector((state) => ({
		cart: state.cart,
	}));

	let total = 0;
	Object.keys(cart).map((p) => (total += cart[p].qty));

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
						<Link to="/cart" className="nav-link" href="#">
							<i className="fas fa-shopping-cart">
								<CountBadge total={total} cls="navbar-badge" />
							</i>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
