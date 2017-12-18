import { createStore } from "redux";
const reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    }
    if (action.type === 'REMOVE_TO_CART') {
        return {
            ...state,
            cart: state.cart.filter((val, key) => {
                if (val.id !== action.id) {
                    return val
                }
            })
        }
    }
    return state;
}
export default createStore(reducer, { cart: [] })