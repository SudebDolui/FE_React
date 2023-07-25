//# If we have given index as file name then it would be imported by default.
import { increment, decrement } from '../actions';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    return (
        <div className='container'>

            <h1>Counter: {counter}</h1>
            
            <br/>
            
            <button
            onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            
            <br/>
            
            <button
            onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

        </div>
    )
}

export default Counter
