import { GET_COUNTRIES_BY_ACTIVITY, GET_COUNTRIES, GET_ACTIVITIES_BY_ID, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME, GET_ACTIVITIES, POST_ACTIVITY, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_ACTIVITIES_BY_NAME } from "./actions/constants";

const initialState = {
    countries: [],
    countriesSelected: [],
    countriesActivity: [],
    allCountries: [],
    countriesBackUp: [],
    country: [],
    activities: [],
    actividad: [],
    error: null,
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES_BY_ACTIVITY:
            const name = action.payload.toLowerCase();
            const activityFilter = [...state.activities].filter(activity =>
                activity.name.toLowerCase().includes(name))
            const activityCountry = activityFilter[0].Countries
            const countryNames = activityCountry.map(country => country.name);
            console.log(countryNames);
            const countryFilter = state.countriesBackUp.filter(element =>
                countryNames.includes(element.name)
              );
            return {
                ...state,
                allCountries: countryFilter
            }










        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                countriesSelected: action.payload,
                countriesActivity: action.payload,
                countriesBackUp: action.payload,

            }
        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                allCountries: action.payload
            }


        case GET_ACTIVITIES:

            return {
                ...state,
                activities: action.payload,
                actividad: action.payload,

            }
        case GET_ACTIVITIES_BY_ID:
            const activityId = parseInt(action.payload);
            const actividadFiltrada = state.activities.find(actividad => actividad.id === activityId);
            console.log(activityId);
            console.log(actividadFiltrada);
            console.log(state.actividad);
            console.log(state.activities);
            return {
                ...state,
                actividad: actividadFiltrada,

            };


        case GET_ACTIVITIES_BY_NAME:
            const activityName = action.payload.toLowerCase();
            const filteredActivities = [...state.activities].filter(activity =>
                activity.name.toLowerCase().includes(activityName)

            );
            return {
                ...state,
                allCountries: filteredActivities
            }







        case POST_ACTIVITY:
            return { ...state }
        case ORDER_BY_NAME:
            const OrderCountries = [...state.allCountries];
            const OrderCountriesAll = action.payload === `asc` ?
                OrderCountries.sort((a, b) => a.name.localeCompare(b.name))
                :
                OrderCountries.sort((a, b) => b.name.localeCompare(a.name));
            return {
                ...state,
                allCountries: OrderCountriesAll
            }
        case ORDER_BY_POPULATION:
            const orderPopulation = [...state.allCountries];

            const orderPop = action.payload === "Higher" ?
                orderPopulation.sort((a, b) => b.population - a.population)
                :
                orderPopulation.sort((a, b) => a.population - b.population);
            return {
                ...state,
                allCountries: orderPop
            }



        case FILTER_BY_CONTINENT:
            const allCountries = state.countriesBackUp;
            const filterContinent = action.payload === "All" ? allCountries : allCountries.filter(element => element.continent === action.payload)
            return {
                ...state,
                allCountries: filterContinent
            }


        default:
            return { ...state }
    };
}





export default countriesReducer