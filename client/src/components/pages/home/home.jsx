import Card from './Card';
import NavBar from '../../bars/navBar'
import "./home.css";

const Home = () => {
    return (
        <div className='home'>
            <h2 className='home-title'>Home</h2>
            <NavBar/>
            <Card/>
        </div>
    )
};

export default Home;