import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  GET_ACTIVITIES,
  POST_ACTIVITY,
  FILTER_BY_CONTINENT,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  GET_ACTIVITIES_BY_NAME,
  ERROR,
} from "./constantes";

export const getCountries = () => {
  return async function (dispatch) {
    try {
      const data = await axios.get(
        `http://localhost:3001/countries/allCountries`
      );
      return dispatch({
        type: GET_COUNTRIES,
        payload: data.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.msg,
      });
    }
  };
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(
        `http://localhost:3001/countries/name?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: data.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.msg,
      });
    }
  };
};
export const getCountriesById = (id) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_COUNTRIES_BY_ID,
        payload: data.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.msg,
      });
    }
  };
};


export const getActivities = () => {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/countries/activities`);
    const activity = json.data;
    return dispatch({
      type: GET_ACTIVITIES,
      payload: activity,
    });
  };
};

export const postActivity = (payload) => {
  return async function (dispatch) {
    const json = await axios.post(`http://localhost:3001/countries/activities`, payload);
    const activity = json.data;
    return dispatch({ type: POST_ACTIVITY, payload: activity });
  };
};

export const filterContinent = (payload) => {
  return { type: FILTER_BY_CONTINENT, payload };
};

// export const filterActivity = (payload) => {
//   return { type: FILTER_BY_ACTIVITY, payload };
// };



export const orderName = (payload) => {
  return { type: ORDER_BY_NAME, payload };
};
export const orderPopulation = (payload) => {
  return { type: ORDER_BY_POPULATION, payload };
};

export const getActivitiesByName = (activityName) => {
  return {
    type: GET_ACTIVITIES_BY_NAME,
    payload: activityName,
  };
};

