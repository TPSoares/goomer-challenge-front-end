import { FETCH_RESTAURANT, FETCH_RESTAURANT_MENU } from "./types";
import axios from "axios";



//fetch the restaurants and dispatch then to restaurantsReducer
export const fetchRestaurants = (restaurants) => {
    return {
        type: FETCH_RESTAURANT,
        payload: restaurants
    }
}

//Gets the list of all available restaurants
export const getAllRestaurants = () => {
    const restaurantListAPI = "https://challange.goomer.com.br/restaurants";

    return (dispatch) => {
        return axios.get(restaurantListAPI)
            .then(response => {
                dispatch(fetchRestaurants(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
}

export const fetchRestaurantMenu = (menu) => {
    return {
        type: FETCH_RESTAURANT_MENU,
        payload: menu
    }
}

export const getRestaurantMenu = (id) => {
    const restaurantMenuAPI = `https://challange.goomer.com.br/restaurants/${id}/menu`;

    return (dispatch) => {
        return axios.get(restaurantMenuAPI)
            .then(response => {
                dispatch(fetchRestaurantMenu(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }

}