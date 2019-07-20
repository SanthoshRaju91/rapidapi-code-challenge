import React from "react";

function Third({ airport, next }) {
  return (
    <div>
      <div className="rounded bg-teal-300 p-5">
        <div className="container">
          <p className="text-sm tracking-wider text-gray-700">
            Great, I could a nearest Airport at
          </p>
          <p className="mt-2">
            <strong className="font-black text-gray-800 tracking-wider">
              {airport}
            </strong>
          </p>
        </div>
      </div>
      <br />

      <div className="rounded bg-teal-300 p-5">
        <div className="container">
          <p className="text-sm tracking-wider text-gray-700">
            I'm almost home safe and sound
          </p>
          <p className="text-sm tracking-wider text-gray-700">
            Could you please help me find a flight to fly me back home to{" "}
            <strong>Japan's NRD airport</strong>
          </p>
        </div>
      </div>
      <br />

      <button
        className="bg-indigo-500 text-white rounded px-5 py-3 mt-5 text-white tracking-wider text-sm"
        onClick={() => next("FINISH", "THIRD")}
      >
        Book the flight now
      </button>
    </div>
  );
}

export default Third;
