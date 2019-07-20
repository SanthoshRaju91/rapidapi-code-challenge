import React from "react";

function Beginning({ next }) {
  return (
    <div className="">
      <div className="rounded bg-teal-300 p-5">
        <label className="block text-sm text-sm text-gray-700 mb-5 tracking-wide">
          Our hero is lost in the middle of nowhere. Lets help him to reach his
          place.
        </label>
      </div>

      <button
        className="bg-indigo-500 text-white rounded px-6 py-2 mt-5 text-white tracking-wider text-md"
        onClick={() => next("FIRST")}
      >
        Start
      </button>
    </div>
  );
}

export default Beginning;
