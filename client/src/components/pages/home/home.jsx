
import NavBar from '../../bars/NavBar'
import "./Home.css"
import Cards from "../../cards/Cards"
import React from 'react';


const Home = () => {  
    return (
        <div className='home'>
            <h2 className='home-title'>Home</h2>
            <NavBar/>
            <Cards/>
        </div>
    )
};

export default Home;