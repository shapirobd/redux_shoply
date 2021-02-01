import React from "react";

const CartItemImg = ({ product }) => {
	return (
		<div className="CartItem-col col-4">
			<img src={product.image_url} className="card-img-top" alt="..." />
		</div>
	);
};

export default CartItemImg;
