// import { getCountries } from '../../redux/actions';
// // import Card from '../card/Card';
// import './Cards.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { getCountries } from "../../redux/actions";
// import { useEffect } from 'react';

// function Cards() {
//    const dispatch = useDispatch();
//    const countries = useSelector((state) => state.allCountries);
//    useEffect(() => {
//       dispatch(getCountries());
//   }, [dispatch]);

//  return (
// <div>
//    {countries.map((country)=> {
//       <div className= "Card">
//          <img src={country.flag} alt={country.name} />
//          <h2>{country.name}</h2>
//          <p>{country.continent}</p>
//       </div>
//    }

//    )}
// </div>
//  );

// }

// export default Cards;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import "./Cards.css";


const Cards = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allcountries);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-cards">
      {currentCards.map((country) => (
        <Link key={country.id} to={`/home/${country.id}`}>
          <div className="card">
            <div className="flip-card-front">
              <img src={country.flag} alt={country.name} className="img-card" />
              <h2>{country.name}</h2>
              <p>{country.continent}</p>
            </div>
          </div>
        </Link>
      ))}

      <div className="pagination">
        {Array.from({ length: Math.ceil(countries.length / cardsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              } paginado`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Cards;
