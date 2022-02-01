import React from 'react';
import {useDispatch} from 'react-redux';

import {changeStatusTodo, deleteTodo} from '../../store/todo.slice';

const Task = ({todoText, index}) => {
    const dispatch = useDispatch();
    const {id, task, checked} = todoText;

    return (<div>
        <label>
            {index + 1}.
            <input type='checkbox' onClick={() => {
                dispatch(changeStatusTodo({id, checked}))
            }}/>
            {checked ? <s>{task}</s> : `${task} `}
        </label>
        <button onClick={() => {
            dispatch(deleteTodo({id}));
        }}>Del
        </button>
    </div>);
};

export {Task};
