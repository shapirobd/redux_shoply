import React from "react";

const CartItemQty = ({ product, cart, handleChange, id }) => {
	return (
		<div className="card-body-item col-2 d-flex align-content-center flex-wrap bg-white">
			<div className="input-group mb-3">
				<div name={id} className="input-group-prepend">
					<button
						className="btn btn-outline-danger"
						type="button"
						name="remove"
						onClick={handleChange}
					>
						-
					</button>
				</div>
				<input
					id={cart[product]}
					name={cart[product]}
					value={product.qty}
					type="text"
					className="form-control border-secondary text-center"
					placeholder=""
					aria-label="Example text with button addon"
					aria-describedby="button-addon1"
				/>
				<div name={id} class="input-group-append">
					<button
						className="btn btn-outline-success"
						type="button"
						name="add"
						onClick={handleChange}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItemQty;
