import './App.css';
import {useEffect, useReducer} from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'input': {
            return {...state, [action.name]: action.value}
        }

        case 'submit': {
            action.event.preventDefault();
            break
        }

        case 'cat': {
            state.array.push({cat: state.cat, dog: state.dog});
            break;
        }

        case 'dog': {
            state.array.push({cat: state.cat, dog: state.dog});
            break ;
        }

    }
    console.log(state)

    return {...state};
}

const initialFormState = {
    cat: '',
    dog: '',
    array: []
}

function App() {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    useEffect(() => {

    }, [])

    const change = (e) => {
        dispatch({
            type: 'input', name: e.target.name, value: e.target.value
        });
    }

    return (<div className="App">

        <form onSubmit={(e) => dispatch({type: 'submit', event: e})}>

            <input name={'cat'} type="text" onChange={change}/>
            <button onClick={() => {
                dispatch({type: 'cat'})
            }}>Add cat...
            </button>

            <input name={'dog'} type="text" onChange={change}/>
            <button onClick={() => {
                dispatch({type: 'dog'})
            }}>Add dog...
            </button>

        </form>
        <hr/>
        {!!state.array && state.array.map((item, index) => <div key={index}>{item.cat}{item.dog}</div>)}

    </div>);
}

export default App;
