import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountriesById } from "../../redux/actions";
import "./Card.css";

const Card = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);
  console.log(country);

  return (
    <div className="card-detail">
      <h1 className="card-name">{country.name}</h1>
      <img className="card-img" src={country.flag} alt={country.name} />
      <p>{country.continent}</p>
      <p>{country.capital}</p>
      <p>{country.population}</p>
      <Link to="/home">
        <button>Volver a los paises</button>
      </Link>
    </div>
  );
};

export default Card;
