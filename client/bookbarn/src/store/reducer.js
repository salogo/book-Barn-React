import * as actionTypes from "../store/actions/actionTypes"


const initialState = {
    cart:0

}
const reducer = (state= initialState, action) =>{
    switch (action.type){
        case actionTypes.ADD_CART:
            return {
                ...state,
                cart:state.cart +1
            }
         default:
             return {
                 ...state
             }     
    }

}

export default reducer