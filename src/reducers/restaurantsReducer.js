import { FETCH_RESTAURANT } from "../actions/types";

export default function restaurantsReducer(state = [], action) {
    switch(action.type) {
        case FETCH_RESTAURANT:
            return action.payload;
        default:
            return state;
    }
}