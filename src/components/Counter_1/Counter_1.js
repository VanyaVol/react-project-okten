import React from 'react';

const Counter_1 = ({dispatch, state}) => {
    return (
        <div>
            <p>Counter 1: {state.count_1}</p>
            <button onClick={() => {
                dispatch({type: 'increment_1'})
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch({type: 'decrement_1'})
            }}>Decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'reset_1'})
            }}>Reset
            </button>
        </div>
    );
};

export {Counter_1};
