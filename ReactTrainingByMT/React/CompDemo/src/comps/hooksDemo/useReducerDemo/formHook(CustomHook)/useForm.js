import { useReducer } from "react";

const formReducer = (state, action) => {

    switch(action.type) {
        case 'CHANGE_VALUE' : 
            return {...state, value: action.value};
        case 'ADD_ERROR' : 
            return {...state, errors: [...state.errors, action.error]};
        case 'CLEAR_ERROR':
            return {...state, errors: []};
        default : 
            return state;
    };

};

const initialState = {value:"", errors: []};

const useForm = () => {
    
    const [state, dispatch] = useReducer( formReducer, initialState);

    // # Receive the data entered by the user.

    const changeValue = event => {
        const newValue = event.target.value;
        dispatch({type: 'CHANGE_VALUE', value: newValue});
    };

    // # For validation of the data entered by the user.

    const validationInput = fn => {
        const errorValue = fn(state.value);

        if(errorValue != null) {
            dispatch({type: 'ADD_ERROR', error: errorValue})
        }
    };

    // # Clear the Errors.
    
    const clearErrors = () => {
        dispatch({type: 'CLEAR_ERROR'})
    };

    return {state, changeValue, validationInput, clearErrors}
};

export default useForm;
