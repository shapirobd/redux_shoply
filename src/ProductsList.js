import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

const ProductsList = () => {
	const dispatch = useDispatch();
	const { cart, data } = useSelector((state) => ({
		cart: state.cart,
		data: state.data,
	}));
	const products = data.products;

	const add = (id) => {
		dispatch(addToCart(id));
	};

	const remove = (id) => {
		dispatch(removeFromCart(id));
	};

	return (
		<>
			<h1>All Items</h1>
			<div className="row row-cols-1 row-cols-md-4">
				{Object.keys(products).map((p) => (
					<ProductCard
						product={products[p]}
						cart={cart}
						id={p}
						add={() => add(p)}
						remove={() => remove(p)}
						key={p}
					/>
				))}
			</div>
		</>
	);
};

export default ProductsList;
