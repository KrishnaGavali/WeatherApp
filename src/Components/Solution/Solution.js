import React from "react";

export default function Solution() {
  return (
    <div className="h-[450px] w-[85vw] bg-white bg-opacity-50 rounded-3xl shadow-[10px_10px_30px_-2px] mx-auto my-14">
      <div
        className=" w-[42.5vw] h-[450px]  float-left rounded-l-3xl text-center"
        id="subCom1"
      >
        <p className=" my-5 text-4xl text-white font-light">Pune</p>
        <p className=" text-8xl text-white">25 °C</p>
        <p className=" my-3 mb-6 font-light text-white">Feels like 24 °C</p>
        <div className="inline border border-solid border-white p-5 bg-white rounded-full shadow-[0px_0px_15px_3px_white]">
          <img
            src="//cdn.weatherapi.com/weather/64x64/day/116.png"
            className=" inline"
            alt=""
          />
          <span className=" my-3 font-light text-black text-2xl">Sunny</span>
        </div>
        <div className=" flex justify-center items-center my-2" id="Astro">
          <div className="my-3 mb-6 font-light text-white AstroItems">
            <span>Sunrise</span>
            <br />
            <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" className="AstroIcons" alt="" />
            <span>05:10 AM</span>
          </div>
          <div className="my-3 mb-6 font-light text-white AstroItems">
            <span>Sunset</span>
            <br />
            <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" className="AstroIcons" alt="" />
            <span>09:03 PM</span>
          </div>
          <div className="my-3 mb-6 font-light text-white AstroItems">
            <span>MoonRise</span>
            <br />
            <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" className="AstroIcons" alt="" />
            <span>12:29 AM</span>
          </div>
          <div className="my-3 mb-6 font-light text-white AstroItems">
            <span>MoonSet</span>
            <br />
            <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" className="AstroIcons" alt="" /> 
            <span>04:01 PM</span>
          </div>
        </div>
      </div>
      <div
        className="w-[42.5vw] h-[450px]  float-right rounded-r-3xl"
        id="subCom2"
      >
        This is sub Components 2
      </div>
    </div>
  );
}
