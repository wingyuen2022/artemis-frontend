import React from 'react';
import Header from  './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Header';

function Layout() {
    return (
        <>
            <Header />
                <main>
                    <Outlet />                    
                </main>
            <Footer />
        </>
    );
}
export default Layout;
