import React from "react";
import { Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductInfo from "./ProductInfo";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Routes = () => {
	return (
		<>
			<Route exact path="/">
				<ProductsList />
			</Route>
			<Route path="/products/:id">
				<ProductInfo />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
		</>
	);
};

export default Routes;
