import React from "react";

function Second({ city, next }) {
  return (
    <div>
      <div className="rounded bg-teal-300 p-5">
        <div className="container">
          <p className="text-gray-700 text-sm tracking-wider">
            I'm currently in
          </p>
          <span className="inline-block mt-1">
            <strong className="font-black text-gray-800 tracking-wider text-md">
              {city}
            </strong>
          </span>
        </div>
      </div>
      <br />

      <div className="rounded bg-teal-300 p-5">
        <div className="container">
          <p className="text-gray-700 text-sm tracking-wider">
            Oh glad, now I know where I am!!.
            <br />
            Could you please help me find the nearest Airport around{" "}
            <strong>{city}</strong> ?
          </p>
        </div>
      </div>
      <br />

      <button
        className="bg-indigo-500 text-white rounded px-5 py-3 mt-5 text-white tracking-wider text-sm"
        onClick={() => next("THIRD", "SECOND")}
      >
        Help me find the nearest airport.
      </button>
    </div>
  );
}

export default Second;
