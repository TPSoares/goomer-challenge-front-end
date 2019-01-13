import { combineReducers } from "redux";
import restaurants from "./restaurantsReducer";
import restaurantMenu from "./restaurantMenuReducer";

const Reducers = combineReducers({
    restaurants: restaurants,
    restaurantMenu: restaurantMenu
});

export default Reducers;