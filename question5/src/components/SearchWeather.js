import React, { useState } from "react";
import GetWeather from "../api/GetWeather";

const SearchWeather = () => {
  const { getWeatherUsingId } = GetWeather();
  const [search, setSearch] = useState("");
  const onHandleChange = (event) => {
    setSearch(event.target.value);
    console.log("entering the city name", event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked on Submit button", search);
    getWeatherUsingId(search);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter city to know the weather temp"
          value={search}
          onChange={onHandleChange}
        />
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchWeather;
