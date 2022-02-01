import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import todoReducer, {addTodo} from '../../store/todo.slice';

const Form = () => {
    const {lengthTodo, finishTasks} = useSelector(state => state['todoReducer']);
    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        const task = e.target[0].value;
        if (task) {
            dispatch(addTodo({task}));
            e.target.reset();
        }
    }

    return (<div>
        <h1>Tasks: {lengthTodo}| Finished tasks: {finishTasks}</h1>
        <form onSubmit={formSubmit}>
            <label>Task: <input type="text" name={'task'} placeholder={'Please, input your tasks...'}/></label>
            <button>Add task...</button>
        </form>
        <hr/>
    </div>);
};

export {Form};
