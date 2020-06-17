
const initialState = {
    cartItems: [] 
}

const reducer = (state = initialState, action) => {

    if(action.type == 'ADD_TO_CART') {
        return {
            ...state,
            cartItems: state.cartItems.concat(action.payload)
        }
    } 

    return state 
}

export default reducer 