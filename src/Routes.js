import React from "react";
import { Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductInfo from "./ProductInfo";
import { useSelector } from "react-redux";

const Routes = () => {
	const { cart, data } = useSelector((state) => ({
		cart: state.cart,
		data: state.data,
	}));

	return (
		<>
			<Route exact path="/">
				<ProductsList />
			</Route>
			<Route path="/products/:id">
				{console.log("INFO")}
				<ProductInfo cart={cart} data={data} />
			</Route>
		</>
	);
};

export default Routes;
