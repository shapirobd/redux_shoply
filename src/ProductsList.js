import React from "react";
import { useSelector } from "react-redux";
// import rootReducer from "./reducers/rootReducer";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

const ProductsList = () => {
	const { cart, data } = useSelector((state) => ({
		cart: state.cart,
		data: state.data,
	}));
	console.log(cart);
	console.log(data);
	const products = data.products;
	// Object.keys(products).map((p, keyIndex) => console.log(p));
	return (
		<div className="row row-cols-1 row-cols-md-4">
			{Object.keys(products).map((p, keyIndex) => (
				<ProductCard product={products[p]} cart={cart} id={p} key={p} />
			))}
		</div>
	);
};

export default ProductsList;
