import React from "react";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import { useSelector } from "react-redux";

const Cart = () => {
	const { cart } = useSelector((state) => ({
		cart: state.cart,
	}));
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name } = e.target;
		const id = e.target.parentElement.getAttribute("name");
		name === "remove" ? dispatch(removeFromCart(id)) : dispatch(addToCart(id));
	};

	return (
		<>
			<h1 className="mb-5">Your Cart</h1>
			<div className="Cart d-flex justify-content-center flex-wrap pb-5">
				{Object.keys(cart).length ? (
					Object.keys(cart).map((itemId) => (
						<CartItem
							id={itemId}
							cart={cart}
							product={cart[itemId]}
							handleChange={handleChange}
						/>
					))
				) : (
					<h3 className="text-secondary mt-5">Cart empty</h3>
				)}
			</div>
		</>
	);
};

export default Cart;
