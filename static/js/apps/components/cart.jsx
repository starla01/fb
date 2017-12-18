import React, { Component } from 'react';
import store from '../store';
String.prototype.formatPrice = Number.prototype.formatPrice = function() {
    var prototypePrice = this - 0;
    prototypePrice = prototypePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    return prototypePrice.split('.')[0];
}
export default class Cart extends Component {
	constructor(props) {
		super(props);
        this.state = {
            cart: []
        };
        this.handleRemove = this.handleRemove.bind(this);
        store.subscribe(() => {
            this.setState({
                cart: store.getState()
            })
        })
	}
    handleRemove(id){
        store.dispatch({
            type: 'REMOVE_TO_CART',
            id: id
        })
    }
    _buildItems(){
        const _this = this;
        if(this.state.cart.cart){
            let elements = _this.state.cart.cart.map(function(elemento, key){
                return ( <div className="itemCart" key={key}>
                        <div className="image">
                            <img src={elemento.imageURL} />
                        </div>
                        <div className="name">{elemento.name}</div>
                        <div className="price">${elemento.price}</div>
                        <div className="remove" onClick={() => _this.handleRemove(elemento.id)}>
                            <span className="up fb icon-ctrl"></span>
                            <span className="down fb icon-ctrl"></span>
                        </div>
                    </div>)
            })
            return elements;
        }
    }
	render() {
        const _this = this;
		return (
			<div id="cart" className="cart">
                <div className="buttonCart">
                    <span className="fb icon-cart"></span>
                    <span className="text"> Carrito de compras</span><br />
                    <span className="total">  Total ${ this.state.cart.cart ? this.state.cart.cart.reduce((sum, product) => (parseInt(sum) + parseInt(product.price)).formatPrice(), 0) : 0}
                    </span>
                </div>
                <div id="listCart" className="listCart">
                     { _this._buildItems() }
                </div>
			</div>
		)
	}
}
