import React from 'react'
import { connect } from 'react-redux'
import '../App.css'

function ViewCounter(props) {

    return (
        <div className="buttons" >
            {props.ctr}
        </div>
    )
}

// Gets the props to display
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}






export default connect(mapStateToProps)(ViewCounter);