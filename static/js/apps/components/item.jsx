import React, { Component } from 'react';
import store from '../store';
class ItemList extends Component {
	constructor(props) {
		super(props);
        this.state = {
			items: this._getData()
		}
        this.handleAdd = this.handleAdd.bind(this);
	}
    _getData(){
        const _this = this;
        fetch('/items').then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(function(json) {
                _this.setState({items: json})
            });
        } else {
            console.log("Oops, no tenemos productos en este momento!");
        }
        });
    }
    _buildItems(){
        const _this = this;
        if(_this.state.items){
            let elements = _this.state.items.catalog.map(function(elemento, key){
                return (<div id="item" className="item" key={key}>
                   <div className="item-int">
                        <div className="imageBack">
                            <img src={elemento.imageURL} />
                        </div>
                        <div className="image">
                            <img src={elemento.imageURL} />
                        </div>
                        <div className="title">{elemento.name}</div>
                        <div className="price">${elemento.price}</div>
                        <div className="buy" onClick={() => _this.handleAdd(elemento)}>
                            <span className="fb icon-cart"></span>
                            <span>Agregar a carrito</span>
                        </div>
                   </div>
                </div>)
            })
            return elements;
        }
    }
    componentDidMount(){
        this._getData();
    }
    handleAdd(element){
        store.dispatch({
            type: 'ADD_TO_CART',
            product: element
        })
    }
	render() {
        const _this = this;
		return (
			<div id="items" className="items">
                { _this._buildItems() }
			</div>
		)
	}
}
export default ItemList;
