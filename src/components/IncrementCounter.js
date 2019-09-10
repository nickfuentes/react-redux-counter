import React from 'react'
import { connect } from 'react-redux'
import '../App.css'

function IncrementCounter(props) {

    const onIncrementButtonClicked = () => {
        props.onIncrement()
    }

    return (
        <div className="increment-counter" >{props.ctr}
            <button onClick={() => onIncrementButtonClicked()}>+</button>
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
        onIncrement: () => dispatch({
            type: "INCREMENT_COUNTER"
        })
    }
}





export default connect(null, mapDispatchToProps)(IncrementCounter);