import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="/about" className="navbar-brand">About Us</Link>
                <Link to="/services" className="navbar-brand">Services</Link>
            </nav>
        </div>
    )
};

export default Navigation;