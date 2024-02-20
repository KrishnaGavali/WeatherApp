import React from "react";

export default function Solution({
  city,
  TempC,
  feels,
  conditionIcon,
  conditionText,
  sunrise,
  sunset,
  moonrise,
  moonset,
  visibility,
  ultraviolet,
  cloudPercent,
  precipitation,
  wind,
  humidity,
  loading,
}) {
  let solutionDivStyle = {};

  if (loading) {
    solutionDivStyle = {
      opacity : "0"
    };
  } else {
    solutionDivStyle = {
      opacity : "100"
    };
  }

  return (
    <div id="solutionDiv" className=" transition-all duration-500 ease-in-out" style={solutionDivStyle}>
      <>
        <div
          className="h-[450px] w-[85vw] bg-white bg-opacity-50 rounded-3xl shadow-[10px_10px_30px_-2px] mx-auto my-14"
          id="solutionPart_1"
        >
          <div
            className="  h-[450px]   rounded-l-3xl text-center"
            id="subCom1"
          >
            <p className=" my-5 text-4xl text-white font-light">{city}</p>
            <p className=" text-8xl text-white">{TempC}°C</p>
            <p className=" my-3 mb-6 font-light text-white">
              Feels like {feels} °C
            </p>
            <div className="inline border border-solid border-white p-5 bg-white rounded-full shadow-[0px_0px_15px_3px_white]">
              <img src={conditionIcon} className=" inline" alt="" />
              <span className=" my-3 font-light text-black text-2xl">
                {conditionText}
              </span>
            </div>
            <div className=" flex justify-center items-center my-2" id="Astro">
              <div className="my-3 mb-6 font-light text-white AstroItems">
                <span>SunRise</span>
                <br />

                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/sunrise.png"
                  className="AstroIcons"
                  alt="sunrise"
                />

                <span className="bg-white text-black rounded-full px-2" >
                  {sunrise}
                </span>
              </div>
              <div className="my-3 mb-6 font-light text-white AstroItems">
                <span>SunSet</span>
                <br />
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/sunset.png"
                  className="AstroIcons"
                  alt="sunset"
                />
                <span className="bg-white text-black rounded-full px-2">
                  {sunset}
                </span>
              </div>
              <div className="my-3 mb-6 font-light text-white AstroItems">
                <span>MoonRise</span>
                <br />
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/moonrise.png"
                  className="AstroIcons"
                  alt="moonrise"
                />
                <span className="bg-white text-black rounded-full px-2">
                  {moonrise}
                </span>
              </div>
              <div className="my-3 mb-6 font-light text-white AstroItems">
                <span>MoonSet</span>
                <br />
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/moonset.png"
                  className="AstroIcons"
                  alt="moonset"
                />
                <span className="bg-white text-black rounded-full px-2">
                  {moonset}
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </>
    </div>
  );
}
