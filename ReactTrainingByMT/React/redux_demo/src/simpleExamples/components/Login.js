import { authenticate } from "../actions";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Login () {
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();

    return(
        <>
            <h2>
                You are {login ? "Logged In": "Logged Out"}
            </h2>

            <button
            onClick={() => dispatch(authenticate())}
            >
                {login ? "Log Out": "Log In"}
            </button>
        </>
    );
};