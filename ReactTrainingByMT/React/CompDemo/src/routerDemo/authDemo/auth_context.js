import { createContext, useContext, useState } from "react";

//# Step 1: Create a context object
const AuthContext = createContext();

export const AuthProvider = ({...props}) => {
    // # Step 2: Declare the state variable and function you would like to provide to the entire application
    const [authenticated, setAuthenticated] = useState(false);

    const login = () => {
        // # Logic to check the credentials
        setAuthenticated(true);
    };

    const logout = () => {
        setAuthenticated(false);
    };

    return (
        // # Step 3: Create provider with the value so that it is available to the consumers.
        <AuthContext.Provider value={{login, logout, authenticated}} {...props}/>
    );

};

// # To consume the values you have to call useContext

// # Let us create a custom hook that returns the useContext obj.
// @ for custom hooks use the convention (place the word 'use' before the function name). ex: useAuth.

export const useAuth = () => useContext(AuthContext);
