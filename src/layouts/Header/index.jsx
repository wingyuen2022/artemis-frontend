import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <>
            <nav className="sticky-top">
                <div className="sticky-top">
                    <Link className="btn btn-light" to="/">Home</Link>
                </div>
            </nav>
            <br />
        </>
    );
}

export default Header;
