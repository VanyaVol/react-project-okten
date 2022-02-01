import React from 'react';
import {useSelector} from 'react-redux';
import {Task} from '../Task/Task';

const Tasks = () => {
    const {todosArray} = useSelector((state) => state['todoReducer']);

    return (<div>
            {todosArray.map((itemTodo, index) => <Task key={itemTodo.id} index={index} todoText={itemTodo}/>)}
        </div>);
};

export {Tasks};
