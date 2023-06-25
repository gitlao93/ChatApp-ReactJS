import { Link } from "react-router-dom";


function Navbar() {

    return(
        <nav className="navbar bg-primary border-bottom border-bottom-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" to="/">ChatApp</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link text-white"  to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Dashboard</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;