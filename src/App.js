import './App.css';
import {useReducer, useState} from "react";

// const reducer = (state, action) => {
//
//     return state;
// }


function App() {
    // const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});

    const [form, setForm] = useState({cat: '', dog: 0});

    const submit = (e) => {
        e.preventDefault();
        console.log(e.target.name);

    }

    const change = (e) => {
        // setForm([e.target.name]:e.target.value);
    }

    const addCat = () => {
    }

    const addDog = () => {

    }

    return (<div className="App">

        <form onSubmit={submit}>
            <input name={'cat'} type="text" onChange={change}/>
            <button onClick={() => {
                addCat()
            }}>Add cat...
            </button>
            <input name={'dog'} type="text" onChange={change}/>
            <button onClick={() => {
                addDog()
            }}>Add dog...
            </button>
        </form>

    </div>);
}

export default App;
