import React from "react";

const CountBadge = ({ total, cls }) => {
	return (
		<h6 className={cls} id="cart-count-wrapper">
			<span className="badge badge-pill badge-danger ml-2">
				<b>{total}</b>
			</span>
		</h6>
	);
};

export default CountBadge;
