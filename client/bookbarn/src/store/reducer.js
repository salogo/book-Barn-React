
const initialState = {
    cartItems: [], 
    isAuthenticated: false  
}

const reducer = (state = initialState, action) => {

    if(action.type == 'ADD_TO_CART') {
        return {
            ...state,
            cartItems: state.cartItems.concat(action.payload)
        }
    } else if(action.type == 'AUTHENTICATED') {
        return {
            ...state, 
            isAuthenticated: action.value 
        }
    }

    return state 
}

export default reducer 