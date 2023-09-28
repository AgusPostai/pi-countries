import axios from "axios"
import {
    GET_COUNTRIES, FAIL, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_ID,
    POST_ACTIVITY, GET_ACTIVITIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
    ORDER_BY_POPULATION, ORDER_BY_NAME, GET_ACTIVITIES_BY_NAME, GET_ACTIVITIES_BY_ID
} from "./constants"

const countriesurl = "http://localhost:3001/countries"
const activityurl = "http://localhost:3001/activity"


export const getCountries = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${countriesurl}/allcountries`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAIL,
                payload: error.response.data.msg
            })

        }
    }
}
export const getCountriesByName = (name) => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${countriesurl}/name?name=${name}`)
            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAIL,
                payload: error.response.data.msg
            })
        }
    }
}
export const getCountriesById = (id) => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${countriesurl}/${id}`)
            return dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAIL,
                payload: error.response.data.msg
            })
        }
    }
}
export const getActivities = () => {
    return async function (dispatch) {
        let json = await axios.get(`${activityurl}/activities`)
        const activity = json.data
        return dispatch({
            type: GET_ACTIVITIES,
            payload: activity
        })
    }
}

//POST
export const postActivity = (payload) => {
    return async function (dispatch) {
        const json = await axios.post(`${activityurl}/activities`, payload);
        const activity = json.data
        return dispatch({ type: POST_ACTIVITY, payload: activity })
    }
}
//FILTERS
export const filterContinent = (payload) => {
    return { type: FILTER_BY_CONTINENT, payload }
}

export const filterActivity = (payload) => {
    return { type: FILTER_BY_ACTIVITY, payload }
}

//ORDER

export const orderName = (payload) => {
    return { type: ORDER_BY_NAME, payload }
}
export const orderPopulation = (payload) => {
    return { type: ORDER_BY_POPULATION, payload }
}

export const getActivitiesById = (id)=>{
    return{
        type: GET_ACTIVITIES_BY_ID,
        payload: id,
    }
}

export const getActivitiesByName = (activityName) => {
    return {
        type: GET_ACTIVITIES_BY_NAME,
        payload: activityName,
    };
};
