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
} from "./constantes";

const initialState = {
  allcountries: [],
  countries: [],
  country: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allcountries: action.payload,
        countries: action.payload,
      };

    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allcountries: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
