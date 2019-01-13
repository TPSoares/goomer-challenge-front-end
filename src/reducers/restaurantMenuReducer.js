import { FETCH_RESTAURANT_MENU } from "../actions/types";

export default function restaurantMenuReducer(state = [], action) {
    switch(action.type) {
        case FETCH_RESTAURANT_MENU:
            return action.payload;
        default:
            return state;
    }
}