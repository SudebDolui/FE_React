import { Link } from "react-router-dom";

export default function Header () {

    return(
        <div>
            <nav className="nav navbar justify-content-between">
                <Link to='/'>Home</Link>
                <Link to='/cars'>Cars List</Link>
                <Link to='/add'>Add New Car</Link>
            </nav>
        </div>
    );
};