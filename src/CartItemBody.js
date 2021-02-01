import React from "react";

const CartItemBody = ({ product }) => {
	return (
		<div className="CartItem-col card-body bg-white col-6 d-flex align-content-around flex-wrap p-3">
			<div className="card-body-item">
				<h3 className="card-title text-dark text-left">{product.name}</h3>
			</div>
			<div className="card-body-item">
				<p className="card-text text-dark  text-left my-3">
					{product.description}
				</p>
			</div>
			<div className="card-body-item">
				<p className="text-left">
					<h3 className="card-text text-success">${product.price}</h3>
				</p>
			</div>
		</div>
	);
};

export default CartItemBody;
