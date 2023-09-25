import SearchBar from "./searchBar";
import { Link } from "react-router-dom";
import "./navBar.css"

const Nav = ({ onSearch }) => {
    return (
        <nav className="search-box">
            <SearchBar onSearch={onSearch} />

            <Link to='/about'>
                <button>About</button>
            </Link>

            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>

            <NavLink to='/detail'>
                <button>Detail</button>
            </NavLink>
        </nav>
    )
};
export default Nav;