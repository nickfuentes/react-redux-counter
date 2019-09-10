import REeact, { userState } from 'react'
import './App.css'
import { connect } from 'react-redux'


function IncrementCounter(props) {
    const [counter, setCounter] = useState(0)

    const onIncrementButtonClicked = (props) => {
        props.onIncrement()
    }

    return (
        <div>
            <button onClick={() => nIncrementButtonClicked()}>Increment</button>
        </div>
    )
}






export default IncrementCounter;