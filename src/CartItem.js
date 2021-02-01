import React from "react";
import CartItemImg from "./CartItemImg";
import CartItemBody from "./CartItemBody";
import CartItemQty from "./CartItemQty";

import "./CartItem.css";

const CartItem = ({ id, handleChange, cart, product }) => {
	return (
		<div className="CartItem card flex-item col-10 mb-2">
			<div className="CartItem-main row no-gutters">
				<CartItemImg product={product} />
				<CartItemBody product={product} />
				<CartItemQty
					product={product}
					cart={cart}
					handleChange={handleChange}
					id={id}
				/>
			</div>
		</div>
	);
};

export default CartItem;
