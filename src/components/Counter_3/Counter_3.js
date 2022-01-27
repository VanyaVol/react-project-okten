import React from 'react';

const Counter_3 = ({dispatch, state}) => {
    return (
        <div>
            <p>Counter 3: {state.count_3}</p>
            <button onClick={() => {
                dispatch({type: 'increment_3'})
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch({type: 'decrement_3'})
            }}>Decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'reset_3'})
            }}>Reset
            </button>
        </div>
    );
};

export {Counter_3};
