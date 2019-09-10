import React from 'react'
import { connect } from 'react-redux'
import '../App.css'

function DecrementCounter(props) {

    const onDecrementButtonClicked = () => {
        props.onDecrement()
    }

    return (
        <div className="decrement-counter" >{props.ctr}
            <button onClick={() => onDecrementButtonClicked()}>-</button>
        </div>
    )
}

// // Gets the props to display
// const mapStateToProps = (state) => {
//     return {
//         ctr: state.counter
//     }
// }

// Dispatcher sends to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({
            type: "DECREMENT_COUNTER"
        })
    }
}





export default connect(null, mapDispatchToProps)(DecrementCounter);