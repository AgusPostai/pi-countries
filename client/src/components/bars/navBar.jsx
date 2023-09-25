import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const Nav = () => {
    const location = useLocation();
    const onHome = location.pathname === "/home";
    return (
        <nav className="search-box">
            {onHome && <SearchBar />}
            <Link to='/activity'><button>Agregar actividad</button></Link>
        </nav>
    );
};

export default Nav;





