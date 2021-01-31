import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductInfo.css";

const ProductInfo = ({ cart, data }) => {
	const { id } = useParams();
	const product = data.products[id];
	console.log(product);

	const dispatch = useDispatch();
	const add = () => {
		console.log(id);
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
				<div className="card-body bg-dark col d-flex align-content-between flex-wrap">
					<div className="card-body-item">
						<h5 className="card-title text-light">{product.name}</h5>
					</div>
					<div className="card-body-item">
						<p className="card-text text-light my-3">{product.description}</p>
					</div>
					<div className="card-body-item">
						<p>
							<b className="card-text text-success">${product.price}</b>
						</p>
					</div>
					<div className="card-body-item">
						<button onClick={add} className="btn btn-primary mx-2 col-5">
							Add
						</button>
						<button
							onClick={remove}
							className={"btn btn-danger mx-2 col-5"}
							disabled={disabled}
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
