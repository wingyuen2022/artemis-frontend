import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Header';
// import { Helmet } from 'react-helmet';

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
