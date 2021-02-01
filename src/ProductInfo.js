import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductInfoBody from "./ProductInfoBody";
import "./ProductInfo.css";

const ProductInfo = () => {
	const { cart, data } = useSelector((state) => ({
		cart: state.cart,
		data: state.data,
	}));
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = data.products[id];

	const add = () => {
		dispatch(addToCart(id));
	};

	const remove = () => {
		dispatch(removeFromCart(id));
	};

	const foundItem = Object.keys(cart).filter((p) => id === p);
	const disabled = foundItem.length ? false : "disabled";

	return (
		<div className="col">
			<div className="card h-100">
				<img src={product.image_url} className="card-img-top" alt="..." />
				<ProductInfoBody
					product={product}
					add={add}
					remove={remove}
					disabled={disabled}
				/>
			</div>
		</div>
	);
};

export default ProductInfo;
