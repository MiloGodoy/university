import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-column">
                <a className="a-link" href="/ghg.vbn.com">Facebook</a>
                <a className="a-link" href="/ghg.vbn.com">Instagram</a>
                <a className="a-link" href="/ghg.vbn.com">X</a>
                <a className="a-link" href="/ghg.vbn.com">YouTube</a>
            </div>
            <div className="footer-column">
                <Link className="a-link">About us</Link>
                <Link className="a-link">Contact</Link>
                <Link className="a-link">Universidad Sudamericana</Link>
            </div>
        </div>
    );
}

export default Footer;
