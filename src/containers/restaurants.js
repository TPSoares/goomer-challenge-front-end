import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "../styles/style.css";
import { Link } from "react-router-dom";

class Restaurants extends Component {

    constructor() {
        super();

        this.state = {
            //limits the number of restaurants on the screen
            // limit: 2
        }
    }

    render() {
        return (
            <div>
    
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h2>Veja a sua lista de restaurantes</h2>
                    </div>
                    <div className="row justify-content-md-center">
                    {
                        this.props.restaurant.slice(0, this.state.limit).map((restaurant) => {
                            return (
                                
                                <div className="card cardMenu col-md-3" value={restaurant.id} key={restaurant.id}>
                                        <img className="card-img-top" key={restaurant.image} src={restaurant.image} alt={restaurant.name}></img> 
                                        <div className="card-body">
                                            <h5 className="card-title" key={restaurant.name}>{restaurant.name}</h5> 
                                            <p className="card-text" key={restaurant.address}><strong>Endereço:</strong> {restaurant.address}</p> 
                                        <Link className="cardButton btn btn-outline-primary" key={restaurant.id} to={`/menu/${restaurant.id}`}>Menu</Link>
                                        </div>
                                </div>
                                
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div>
                    <Button bsStyle="primary" onClick = {() => 
                        {this.setState({limit: this.state.limit + 1})}}>
                        Mostrar mais restaurantes
                    </Button>
                </div> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {restaurant: state.restaurants};
}

export default connect(mapStateToProps, null)(Restaurants);