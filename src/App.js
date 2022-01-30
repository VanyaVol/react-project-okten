import {useReducer} from "react";

import css from './App.module.css';
import {FormCat, FormDog, RenderCatAndDog} from "./components";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'submit': {
            return {...state, array: [...state.array, {id: (new Date().getTime().toString()), ...action.obj}]}
        }

        case 'deleteCat': {
            return {...state, array: [...state.array.filter(item => item.id !== action.id)]}
        }

        case 'deleteDog': {
            return {...state, array: [...state.array.filter(item => item.id !== action.id)]}
        }
    }

    return state;
}

const initialFormState = {
    obj: {}, array: []
}

function App() {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    const deleteCat = (id) => {
        dispatch({type: 'deleteCat', id: id})
    }

    const deleteDog = (id) => {
        dispatch({type: 'deleteDog', id: id})
    }

    return (<div className="App">
        <div className={css.form}>
            <FormCat dispatch={dispatch}/>
            <FormDog dispatch={dispatch}/>
        </div>

        <hr/>

        <RenderCatAndDog state={state} deleteCat={deleteCat} deleteDog={deleteDog}/>

    </div>);
}

export default App;
