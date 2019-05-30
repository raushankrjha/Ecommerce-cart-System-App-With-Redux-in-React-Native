const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'REMOVE_ITEM':
            return state.filter(cartItem => cartItem.id !== action.payload.id)
    }

    return state
}

export default cartItems