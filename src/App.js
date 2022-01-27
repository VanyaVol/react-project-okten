import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment_1': {
            return {...state, count_1: state.count_1 + 1};
        }
        case 'decrement_1': {
            return {...state, count_1: state.count_1 - 1};
        }
        case 'reset_1': {
            return {...state, count_1: state.count_1 = 0}
        }
        case 'increment_2': {
            return {...state, count_2: state.count_2 + 1};
        }
        case 'decrement_2': {
            return {...state, count_2: state.count_2 - 1};
        }
        case 'reset_2': {
            return {...state, count_2: state.count_2 = 0}
        }
        case 'increment_3': {
            return {...state, count_3: state.count_3 + 1};
        }
        case 'decrement_3': {
            return {...state, count_3: state.count_3 - 1};
        }
        case 'reset_3': {
            return {...state, count_3: state.count_3 = 0}
        }
    }

    return state
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count_1: 0, count_2: 0, count_3: 0});

    return (<div className="App">
        <p>Counter 1: {state.count_1}</p>
        <button onClick={() => {
            dispatch({type: 'increment_1'})
        }}>Increment
        </button>
        <button onClick={() => {
            dispatch({type: 'decrement_1'})
        }}>Decrement
        </button>
        <button onClick={() => {
            dispatch({type: 'reset_1'})
        }}>Reset
        </button>

        <p>Counter 2: {state.count_2}</p>
        <button onClick={() => {
            dispatch({type: 'increment_2'})
        }}>Increment
        </button>
        <button onClick={() => {
            dispatch({type: 'decrement_2'})
        }}>Decrement
        </button>
        <button onClick={() => {
            dispatch({type: 'reset_2'})
        }}>Reset
        </button>

        <p>Counter 3: {state.count_3}</p>
        <button onClick={() => {
            dispatch({type: 'increment_3'})
        }}>Increment
        </button>
        <button onClick={() => {
            dispatch({type: 'decrement_3'})
        }}>Decrement
        </button>
        <button onClick={() => {
            dispatch({type: 'reset_3'})
        }}>Reset
        </button>
    </div>);
}

export default App;
