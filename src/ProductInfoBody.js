import React from "react";

const ProductInfoBody = ({ product, add, remove, disabled }) => {
	return (
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
	);
};

export default ProductInfoBody;
