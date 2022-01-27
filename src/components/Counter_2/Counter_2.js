import React from 'react';

const Counter_2 = ({dispatch, state}) => {
    return (
        <div>
            <p>Counter 2: {state.count_2}</p>
            <button onClick={() => {
                dispatch({type: 'increment_2'})
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch({type: 'decrement_2'})
            }}>Decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'reset_2'})
            }}>Reset
            </button>
        </div>
    );
};

export {Counter_2};
