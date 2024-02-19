import React, { useState } from "react";
import Solution from "../Solution/Solution";

export default function SearchBar() {
  const [city, setCity] = useState("City");
  const [tempC, setTempC] = useState("__");
  const [feelsLike, setFeelsLike] = useState("__");
  const [conditionIcon, setconditionIcon] = useState("__");
  const [conditon, setCondition] = useState("__");
  const [sunRise, setSunrise] = useState("___");
  const [sunSet, setSunSet] = useState("___");
  const [moonRise, setMoonRise] = useState("___");
  const [moonSet, setMoonSet] = useState("___");
  const [visible, setVisible] = useState("__");
  const [UV , setUV] = useState("__");
  const [cloud , setCloud] = useState("__");
  const [precip , setPricip] = useState("__");
  const [windspeed , setWindSpeed] = useState("__");
  const [humi , setHumi] = useState("__");

  // feelsL Like, condition, condition icon , sunrise , sunset , moonrise, moonset

  let dataDistribution = async () => {
    // Create a new Date object representing the current date
    const currentDate = new Date();

    // Get the components of the current date
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
    const currentDay = currentDate.getDate();

    // Format the date for display
    const formattedDate = `${currentYear}-${
      currentMonth < 10 ? "0" + currentMonth : currentMonth
    }-${currentDay < 10 ? "0" + currentDay : currentDay}`;

    // Print the formatted date
    console.log("Formatted Date for Today:", formattedDate);

    setCity(document.getElementById("SearchBar").value);

    let searchcity = document.getElementById("SearchBar").value;

    let url = `http://api.weatherapi.com/v1/current.json?key=dd25acb089f24ca9b4645053241702&q=${searchcity}&aqi=no$dt=${formattedDate}`;
    console.log(url);

    let response = await fetch(url);
    let data = await response.json();
    // await console.log(data);

    setTempC(data.current.temp_c);
    setFeelsLike(data.current.feelslike_c);
    setconditionIcon(data.current.condition.icon);
    setCondition(data.current.condition.text);

    let astrourl = `https://api.weatherapi.com/v1/astronomy.json?key=dd25acb089f24ca9b4645053241702&q=${searchcity}&dt=${formattedDate}`;
    let astroResponse = await fetch(astrourl);
    let astroData = await astroResponse.json();
    console.log("startHere");
    console.log(astroData);
    console.log(astrourl);

    setSunrise(astroData.astronomy.astro.sunrise);
    setSunSet(astroData.astronomy.astro.sunset);
    setMoonRise(astroData.astronomy.astro.moonrise);
    setMoonSet(astroData.astronomy.astro.moonset);

    setVisible(data.current.vis_km);
    setUV(data.current.uv);
    setCloud(data.current.cloud);
    setPricip(data.current.precip_mm)
    setWindSpeed(data.current.wind_kph)
    setHumi(data.current.humidity)
   
    
  };

  return (
    <div>
      <div className="p-2" style={{}}>
        <div className="text-center">
          <div className=" mt-3">
            <h3
              className=" inline text-white font-semibold mx-10 py-1 border-b-4 rounded navitemsRespo]"
              id="navitems"
            >
              Real Time Weather
            </h3>
            <h3
              className=" inline text-white font-semibold mx-10 py-1 hover:border-b-4 transition-all rounded  "
              id="navitems"
            >
              Forecast Weather
            </h3>
          </div>
          <div className="text-center mt-6">
            <input
              type="text"
              name="City Search"
              id="SearchBar"
              className=" p-3 mx-1 text-center rounded-full  w-[550px] bg-white bg-opacity-50 min-[320px]:w-[90vw] max-[600px]:w-[90vw]"
              placeholder="SEARCH FOR CITY .."
            />
            <button
              className="p-3 min-[320px]:m-2 max-[600px]:m-2 px-6 border border-black border-solid rounded-md bg-blue-700  text-white mx-[16px] hover:bg-blue-500 transition-all "
              onClick={dataDistribution}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Solution
        city={city}
        TempC={tempC}
        feels={feelsLike}
        conditionIcon={conditionIcon}
        conditionText={conditon}
        sunrise={sunRise}
        sunset={sunSet}
        moonrise={moonRise}
        moonset={moonSet}
        visibility={visible}
        ultraviotlet={UV}
        cloudPercent={cloud}
        precipitation={precip}
        wind={windspeed}
        humidity={humi}
      />
    </div>
  );
}
