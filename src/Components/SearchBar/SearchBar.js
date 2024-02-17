import React from "react";

export default function SearchBar() {
  return (
    <div
      className="p-2"
      style={{
        
      }}
    >
      <div className="text-center">
        <div className=" mt-3">
          <h3
            className=" inline text-white font-semibold mx-10 py-1 border-b-4 rounded"
            id="navitems1"
          >
            Real Time Weather
          </h3>
          <h3
            className=" inline text-white font-semibold mx-10 py-1 hover:border-b-4 transition-all rounded"
            id="navitems2"
          >
            Forecast Weather
          </h3>
        </div>
        <div className="text-center mt-6">
          <input
            type="text"
            name="City Search"
            id="SearchBar"
            className=" p-3 mx-1 text-center rounded-full border-2 border-solid border-black w-[550px]"
            placeholder="SEARCH FOR CITY .."
          />
          <button className="p-3 px-6 border border-black border-solid rounded-md bg-blue-700 text-white mx-[16px] hover:bg-blue-500 transition-all "> 
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
