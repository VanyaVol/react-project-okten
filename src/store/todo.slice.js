import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todosArray: [],
        lengthTodo: 0,
        finishTasks: 0
    },
    reducers: {
        addTodo: (state, action) => {
            state.todosArray.push({id: new Date().getTime(), task: action.payload.task, checked: false});
            state.lengthTodo = state.todosArray.length;
        },
        deleteTodo: (state, action) => {
            state.todosArray = state.todosArray.filter(item => {
                if (item.id !== action.payload.id) {
                    return item;
                } else {
                    if (item.checked) {
                        state.finishTasks--;
                    }
                }
            });

            state.lengthTodo = state.todosArray.length;
        },
        changeStatusTodo: (state, action) => {
            state.todosArray = state.todosArray.map(item => {
                if (item.id === action.payload.id) {
                    item.checked = !action.payload.checked;
                    if (item.checked) {
                        state.finishTasks++;
                    } else {
                        state.finishTasks--;
                    }
                }
                return item;
            });
        }
    }
})

const todoReducer = todoSlice.reducer;

export const {addTodo, deleteTodo, changeStatusTodo} = todoSlice.actions;

export default todoReducer;