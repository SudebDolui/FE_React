
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './auth_context';

function Home() {
    const {authenticated} = useAuth();
    // const {authenticated, login, logout} = useAuth();

    return (
        <>
            <h1>
                Home
            </h1>

            <h2>
                You are {authenticated ? "Logged In" : "Logged Out"}
            </h2>

            <Link to='/login'>LogIn</Link>

            {/* <button
            onClick={login}
            >
                Log in
            </button>

            <br/>

            <button
            onClick={logout}
            >
                Log out
            </button> */}
        </>
    )
};

function Login() {
    const {authenticated, login} = useAuth();

    return (
        <>
            <h1>
                Login Page
            </h1>

            <h2>
                You are {authenticated ? "Logged In" : "Logged Out"}
            </h2>

            <button
            onClick={login}
            >
                Log in
            </button>

            <Link to='/logout'>Log Out</Link>

        </>
    )
};

function Logout() {
    const {authenticated, logout} = useAuth();

    return (
        <>
            <h1>
                Log out
            </h1>

            <h2>
                You are {authenticated ? "Logged In" : "Logged Out"}
            </h2>

            <button
            onClick={logout}
            >
                Log out
            </button>

            <Link to='/'>Home</Link>

        </>
    )
};

export function AddProduct() {
    const {authenticated, logout} = useAuth();

    return (
        <>
            <h1>
                Log out
            </h1>

            <h2>
                You are {authenticated ? "Logged In" : "Logged Out"}
            </h2>

            <button
            onClick={logout}
            >
                Log out
            </button>

            <Link to='/'>Home</Link>

        </>
    );
};

export default function BasicApp() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/addProduct' element={<AddProduct />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export { Home, Login, Logout }
