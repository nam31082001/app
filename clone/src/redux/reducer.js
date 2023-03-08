import { ADD_PRODUCT_CART, DETAIL_API, GET_API } from "./action"

const initState = {
    data: [],
    detail: {},
    cart: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_API:
            return { ...state, data: action.payload, detail: {} }
        case DETAIL_API:
            return { ...state, detail: action.payload }
        case ADD_PRODUCT_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }

}

export default rootReducer