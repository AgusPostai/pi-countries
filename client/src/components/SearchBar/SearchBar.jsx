// SearchBar.js
import "./SearchBar.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getActivitiesByName, getCountries, getCountriesByName } from '../../redux/actions/actions'; 

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [searchType, setSearchType] = useState("Countries"); 


    function changeHandler(e) {
        e.preventDefault();
        const inputValue = e.target.value;
        setInput(inputValue);
       
        if (searchType === "Countries") {
           
            dispatch(getCountriesByName(inputValue))
        } else if (searchType === "Activities") {
            dispatch(getActivitiesByName(inputValue)); 
        }

    }
   

    function handleTypeChange(e) {
        setSearchType(e.target.value);
        setInput(""); 
        dispatch(getCountries())
        
    }

    return (
        <>
            <div className='input-wrapper'>
                <select value={searchType} onChange={handleTypeChange}>
                    <option value="Countries">Paises</option>
                    <option value="Activities">Actividades</option>
                </select>
                <input
                    className='input'
                    value={input}
                    placeholder={`Search by ${searchType}`}
                    onChange={changeHandler}
                />
            </div>
        </>
    )
}

export default SearchBar;
