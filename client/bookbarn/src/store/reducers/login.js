
const initialState = {
    isAuthenticated: false  
}

const reducer = (state = initialState, action) => {

    if(action.type == 'AUTHENTICATED') {
        return {
            ...state, 
            isAuthenticated: action.value 
        }
    }

    return state 
}

export default reducer 