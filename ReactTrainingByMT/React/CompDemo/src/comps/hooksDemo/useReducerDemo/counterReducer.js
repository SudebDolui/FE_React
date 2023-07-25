import { useState, useReducer } from "react";

const initialState = 0;

const countReducer = (state, action) => {

    switch(action.type) {
        case 'increment' : 
            // return state + 1;
            return state + action.payload;
        case 'decrement' : 
            // return state - 1;
            return state - action.payload;
        case 'reset':
            return 0;
        default : 
            return state;
    };

};

const CounterReducer = () => {

    /*
    //  # This also works
    const countReducer = (state, action) => {
        
        switch(action.type) {
            case 'increment' : 
                // return state + 1;
                return state + action.payload;
            case 'decrement' : 
                // return state - 1;
                return state - action.payload;
                case 'reset':
                    return 0;
                    default : 
                    return state;
                };
                
            };
    */

    // const [counter, setCounter] = useState(0);
    // const [counter, dispatch] = useReducer(countReducer, initialState);
    const [counter, dispatch] = useReducer(countReducer, 100);

    return (
        <>
            <h1>React Counter</h1>
            <h2>Count: {counter}</h2>
            <br/>
            {/* <button className="btn btn-primary" onClick={() => setCounter(counter+1)}>Increment</button> */}
            <button 
            className="btn btn-primary" 
            onClick={() => dispatch({type: 'increment', payload: 5})}
            >
                Increment
            </button>
            <br/>
            {/* <button className="btn btn-primary" onClick={() => setCounter(counter-1)}>Decrement</button> */}
            <button 
            className="btn btn-primary" 
            onClick={() => dispatch({type: 'decrement', payload: 5})}
            >
                Decrement
            </button>
            <br/>
            {/* <button className="btn btn-primary" onClick={() => setCounter(0)}>Reset</button> */}
            <button 
            className="btn btn-primary" 
            onClick={() => dispatch({type: 'reset', payload: 0})}
            >
                Reset
            </button>
        </>
    )
};

export default CounterReducer;

/*
    # Complex State updates.
    # Where the new state depends on the previous.
    # reducer - should be a pure function that takes current state and the action object and returns the new state.
    # (state, action) => newState
    # useReducer will return a value and a dispatch action.
    # action
    # action
*/
