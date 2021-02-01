import React from "react";
import { Link } from "react-router-dom";
import CountBadge from "./CountBadge";

const ProductCard = ({ product, cart, id, add, remove }) => {
	const foundItem = Object.keys(cart).filter((p) => id === p);
	const disabled = foundItem.length ? false : "disabled";
	console.log(cart);

	return (
		<div className="col mb-4">
			<div className="card h-100">
				<div className="card-body bg-dark col d-flex align-content-between flex-wrap">
					<div className="card-body-item">
						<h5 className="card-title text-light">{product.name}</h5>
						{cart[id] ? (
							<CountBadge total={cart[id].qty} cls="card-badge" />
						) : null}
					</div>
					<div className="card-body-item">
						<Link to={`/products/${id}`}>
							<button className="btn btn-primary my-3 col-11">Details</button>
						</Link>
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

export default ProductCard;
