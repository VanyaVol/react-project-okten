import './App.css';
import {useReducer} from "react";
import {Counter_1} from "./components/Counter_1/Counter_1";
import {Counter_2} from "./components/Counter_2/Counter_2";
import {Counter_3} from "./components/Counter_3/Counter_3";

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
        <Counter_1 dispatch={dispatch} state={state}/>
        <Counter_2 dispatch={dispatch} state={state}/>
        <Counter_3 dispatch={dispatch} state={state}/>
    </div>);
}

export default App;
