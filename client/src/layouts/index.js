import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Header';

function Layout() {
    return (
        <>
            <Navbar />
                <main>
                    <Outlet />                    
                </main>
            <Footer />
        </>
    );
}
export default Layout;
