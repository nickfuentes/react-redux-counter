import React from 'react'
import { connect } from 'react-redux'


function Subtract10(props) {

    const subtract10ButtonClicked = () => {
        props.subtract10()
    }

    return (
        <div className="buttons" >{props.ctr}
            <button onClick={() => subtract10ButtonClicked()}>SUBTRACT 10</button>
        </div>
    )
}

// Dispatcher sends to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        subtract10: () => dispatch({
            type: "SUBTRACT_10"
        })
    }
}





export default connect(null, mapDispatchToProps)(Subtract10);