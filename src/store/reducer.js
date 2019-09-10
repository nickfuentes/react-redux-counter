const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === "INCREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === "DECREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === "ADD_10") {
        return {
            ...state,
            counter: state.counter + 10
        }
    } else if (action.type === "SUBTRACT_10") {
        return {
            ...state,
            counter: state.counter - 10
        }
    }
    return state
}

export default reducer