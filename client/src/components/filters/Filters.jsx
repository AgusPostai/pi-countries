import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterContinent,
  orderPopulation,
  orderName,
  getCountries,
  getCountryByActivity,
} from "../../redux/actions/actions";
import "./Filters.css";
const Filters = () => {
  const dispatch = useDispatch();
  const [selectedOrderName, setSelectedOrderName] = useState("Select");
  const [selectedOrderPopulation, setSelectedOrderPopulation] = useState("Select");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState("Select activity");
  const activities = useSelector((state) => state.activities);


  /*
useEffect(() => {
    dispatch(getCountries())
}, [handleFilter]);    

*/

  function handleFilter(e) {
    const selectedValue = e.target.value;
    setSelectedContinent(selectedValue);
    setSelectedOrderName("Select");
    setSelectedOrderPopulation("Select");
    dispatch(filterContinent(selectedValue));
  }

  function handleOrderPopulation(e) {
    const selectedValue = e.target.value;
    setSelectedOrderPopulation(selectedValue);
    setSelectedOrderName("Select");
    setSelectedContinent("All");
    dispatch(orderPopulation(selectedValue));
  }
  function handlerOrderName(e) {
    const selectedValue = e.target.value;
    setSelectedOrderName(selectedValue);
     setSelectedOrderPopulation("Select");
     setSelectedContinent("All");
    dispatch(orderName(selectedValue));
  }

function handleActivity(e) {
    const selectedValue = e.target.value;
    setSelectedActivity(selectedValue);
    setSelectedOrderName("Select");
    setSelectedOrderPopulation("Select");
    setSelectedContinent("All");
    dispatch(getCountryByActivity(selectedValue));

}

  return (
    <div className="filter-container">
      <div>
        <select
          className="filter-region"
          value={selectedContinent}
          onChange={handleFilter}
        >
          <option value="All">Continente</option>
          <option value="Africa">África</option>
          <option value="Americas">América</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceanía</option>
        </select>
      </div>
      <div>
        <select value={selectedOrderName} onChange={handlerOrderName}>
          <option>A-Z</option>
          <option value="asc">Ascendente</option>
          <option value="dsc">Descendente</option>
        </select>
      </div>

      <div>
        <select
          value={selectedOrderPopulation}
          onChange={handleOrderPopulation}
        >
          <option>Poblacion</option>
          <option value="Higher">Mas altas</option>
          <option value="Lower">Mas bajas</option>
        </select>
      </div>
      <div>
        <select value={selectedActivity} onChange={handleActivity}>
          <option> Select activity</option>
          {activities.map((activity) => {
            return (
              <option value={activity.name} key={activity.name}>
                {activity.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filters;
