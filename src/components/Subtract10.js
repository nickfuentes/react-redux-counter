import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'


function Subtract10(props) {

    const subtract10ButtonClicked = () => {
        props.subtract10()
    }

    return (
        <div className="buttons" >{props.ctr}
            <Button color="primary" onClick={() => subtract10ButtonClicked()}>Subtract 10</Button>{' '}
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