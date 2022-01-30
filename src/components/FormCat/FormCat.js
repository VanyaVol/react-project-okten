import React from 'react';
import {useForm} from "react-hook-form";

const FormCat = ({dispatch}) => {
    const {register, handleSubmit, reset} = useForm();

    const catSubmit = (data) => {
        dispatch({type: 'submit', obj: {...data}});
        reset();
    }

    return (<>
        <form onSubmit={handleSubmit(catSubmit)}>

            <input {...register('cat')} type="text"/>
            <button>Add cat...</button>

        </form>
    </>);
};

export {FormCat};
