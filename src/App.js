import './App.css';
import {useEffect, useReducer, useState} from "react";

const reducer = (state, action) => {


    return state;
}

let arr = [];


function App() {
    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});

    // const [trigger, setTrigger] = useState(null);


    // const [form, setForm] = useState({cat: '', dog: ''});

    // const [state, setState] = useState([]);

    // useEffect(() => {
    // }, [trigger]);

    // const submit = (e) => {
    //     e.preventDefault();
    // }
    //

    const change = (e) => {
        // {...state, [e.target.name]: e.target.value});
    }

    //
    // const addCat = () => {
    //     arr.push(form);
    //     setState(arr);
    //     setTrigger({})
    // }

    // const addDog = () => {
    //     arr.push(form);
    //     setState(arr);
    //     setTrigger({})
    // }


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
        <hr/>

        {state.map((item, index) => <div key={index} style={{display: 'flex'}}>
            <div>
                {item.cat}
            </div>
            <div>
                {item.dog}
            </div>
        </div>)}

    </div>);
}

export default App;
