import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
    return (
        <>
        <div className="footer-container">
            <footer className="footer-info">Artemis Camping 2022 | Created by Apple.py
            <hr />
            <span className="github-links">
                    <Link className="link-item" to="">Edgar </Link>
                    <Link className="link-item" to="">Nathan </Link>
                    <Link className="link-item" to="">Sam</Link>
                    <Link className="link-item" to="">Summira</Link>
                    <Link className="link-item" to="">Wing</Link>
                </span>
            </footer>
        </div>
        </>
    )
}