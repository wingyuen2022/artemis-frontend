import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
    return (
        <>
        <div className="footer-container">
            <footer className="footer-info">Artemis Camping 2022
            <span className="github-links">
                    <Link className="link-item" to="https://github.com/CrookedTimber">Edgar </Link>
                    <Link className="link-item" to="https://github.com/nathanolds">Nathan </Link>
                    <Link className="link-item" to="https://github.com/Tari38">Sam</Link>
                    <Link className="link-item" to="https://github.com/sumshuss">Summira</Link>
                    <Link className="link-item" to="https://github.com/wingyuen2022">Wing</Link>
                </span>
            </footer>
        </div>
        </>
    )
}