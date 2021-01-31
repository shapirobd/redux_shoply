import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

const ProductCard = ({ product, cart, id }) => {
	const dispatch = useDispatch();
	const add = () => {
		console.log(id);
		dispatch(addToCart(id));
	};

	const remove = () => {
		dispatch(removeFromCart(id));
	};

	return (
		<div className="col mb-4">
			<div className="card h-100">
				<img src={product.image_url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title text-dark">{product.name}</h5>
					<p className="card-text text-dark">{product.description}</p>
					<p className="card-text text-dark">{product.price}</p>
					<button onClick={add} className="btn btn-primary">
						Add to Cart
					</button>
					<button onClick={remove} className="btn btn-primary">
						Remove from Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
