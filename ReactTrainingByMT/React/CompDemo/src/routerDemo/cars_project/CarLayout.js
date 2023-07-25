import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

function CarLayout() {
    return (
        <>
            <Header/>
            <main className='children_layout'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default CarLayout;