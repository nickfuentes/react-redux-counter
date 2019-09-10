import React from 'react'
import { connect } from 'react-redux'


function Add10(props) {

    const add10ButtonClicked = () => {
        props.add10()
    }

    return (
        <div className="buttons" >{props.ctr}
            <button onClick={() => add10ButtonClicked()}>ADD 10</button>
        </div>
    )
}

// Dispatcher sends to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        add10: () => dispatch({
            type: "ADD_10"
        })
    }
}





export default connect(null, mapDispatchToProps)(Add10);