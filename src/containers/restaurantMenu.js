import React, { Component } from "react";
import { getRestaurantMenu } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../styles/style.css";

class RestaurantMenu extends Component {

    componentWillMount() {
        this.props.getRestaurantMenu(this.props.match.params.id)
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h2>Menu</h2>
                    </div>
                    <div className="row justify-content-md-center">
                        {
                            this.props.restaurantMenu.map((dish) => {
                                return (
                                    <div className="menu col-md-5" value={dish.name} key={dish.name}>
                                        <img className="menuImgs" key={dish.image} src={dish.image} alt={dish.name}></img> 
                                        <div className="info">
                                            <h5 key={dish.name}><strong>{dish.name}</strong></h5> 
                                            <p key={dish.price}><strong>R$</strong> {dish.price}</p> 
                                            <p key={dish.group}><strong>Categoria: </strong>{dish.group}</p> 
                                        </div>
                                    </div>
                                )
                            })    
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {restaurantMenu: state.restaurantMenu}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getRestaurantMenu }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);