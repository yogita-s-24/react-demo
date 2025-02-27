export const initialState = {counter : 0};

export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {counter : state.counter + 1}
        
        case 'decrement':
            return {counter : state.counter - 1}

        case 'incrementByAmount':
            return {counter : state.counter + action.payload}

        case 'decrementByAmount':
            return {counter : state.counter - action.payload}
        
        case 'reset':
            return {counter : 0}
        
        default:
            return state
    }
}