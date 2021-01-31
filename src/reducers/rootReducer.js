import data from "../data";

const INITIAL_STATE = {
	cart: [],
	data,
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const { id } = action;
			const qty = state.cart[id] ? state.cart[id].qty + 1 : 1;
			return {
				...state,
				cart: {
					...state.cart,
					[id]: {
						...state.data.products[id],
						qty,
					},
				},
			};
		}
		case "REMOVE_FROM_CART": {
			const { id } = action;
			if (state.cart[id]) {
				const qty = state.cart[id].qty - 1;
				if (qty > 0) {
					return {
						...state,
						cart: {
							...state.cart,
							[id]: {
								...state.data.products[id],
								qty,
							},
						},
					};
				} else {
					const stateCopy = { ...state };
					delete stateCopy.cart[id];
					return stateCopy;
				}
			}
			return;
		}
		default:
			return state;
	}
};

export default rootReducer;
