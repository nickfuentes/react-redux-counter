import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Button } from 'reactstrap';

function IncrementCounter(props) {

    const onIncrementButtonClicked = () => {
        props.onIncrement()
    }

    return (
        <div className="buttons" >{props.ctr}
            <Button color="primary" onClick={() => onIncrementButtonClicked()}>+</Button>{' '}
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