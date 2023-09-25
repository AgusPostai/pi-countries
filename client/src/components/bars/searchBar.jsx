import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    dispatch(getCountriesByName(name));
  };

  return (
    <div>
      <input type="search" value={name} onChange={handleChange} />
   
    </div>
  );
};

export default SearchBar;
