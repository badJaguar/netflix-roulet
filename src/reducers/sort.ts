import { AnyAction } from "redux";
import { SortBy } from "../actions/movies";

const initialState = {
	sortValue: SortBy,
};
export const sortData = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case "MOVIES_SORT_AND_ORDER_DATA":
			return {
				...state,
				sortValue: action.payload,
			};
		default:
			return state;
	}
};
