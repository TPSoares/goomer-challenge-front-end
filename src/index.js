import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import RestaurantMenu from "./containers/restaurantMenu";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from "./reducers/index";
import { getAllRestaurants } from "./actions";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

const store = createStore(Reducers, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(getAllRestaurants());

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route exact path="/" component={App}></Route>
            <Route path="/menu/:id" component={RestaurantMenu}></Route>
        </Provider>
    </BrowserRouter>, document.getElementById("root")
);