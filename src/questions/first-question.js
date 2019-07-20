import React from "react";

function First({ next }) {
  return (
    <div>
      <div className="rounded bg-teal-300 p-5">
        <div className="container ">
          <h1 className="text-lg text-gray-700 tracking-wider font-black">
            201.114.196.56
          </h1>
        </div>
      </div>
      <br />

      <div className="rounded bg-teal-300 p-5">
        <div className="container ">
          <p className="text-sm text-gray-700 tracking-wider leading-relaxed ">
            Fortunately he stumbled upon a phone. With his geeky skills he was
            able to find the IP address of his location.
            <br />
            <br />
          </p>
        </div>
      </div>
      <br />

      <button
        className="bg-indigo-500 text-white rounded px-5 py-3 mt-5 text-white tracking-wider text-md"
        onClick={() => next("SECOND", "FIRST")}
      >
        Where am I ?
      </button>
    </div>
  );
}

export default First;
