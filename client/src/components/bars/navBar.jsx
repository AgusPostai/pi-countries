import SearchBar from "./searchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />

            <Link to='/about'>
                <button>About</button>
            </Link>

            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>

            <NavLink to='/favorites'>
                <button>Favorites</button>
            </NavLink>
        </nav>
    )
};
export default Nav;