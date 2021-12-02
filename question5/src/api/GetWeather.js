import axios from "axios";

import React, { useState } from "react";

const GetWeather = () => {
  const [cityId, setCityId] = useState("");

  function getCityId(city) {
    const url = `https://www.metaweather.com/api/location/search/?query=${city}`;
    axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        setCityId(res.data.woeid);
      })
      .catch((err) => {
        console.log("error", err);
      });
    return cityId;
  }

  function getWeatherUsingId(cityId) {
    const cityApiCallId = getCityId(cityId);
    const url = `https://www.metaweather.com/api/location/${cityApiCallId}/`;
    axios
      .get(url)
      .then((res) => {
        console.log("result in wheatherid", res);
      })
      .catch((err) => {
        console.log("err in wheatherusing id", err);
      });
  }

  return { getCityId, getWeatherUsingId };
};

export default GetWeather;
