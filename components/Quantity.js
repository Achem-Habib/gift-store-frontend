import { useState } from "react";

export default function Quantity() {
  const [qnty, setQnty] = useState(1);

  function handleChange(e) {
    console.log("I am triggered");
    const value = parseInt(e.target.value);
    if (value === isNaN || value < 1) {
      setQnty(1);
    } else {
      setQnty(value);
    }
  }

  function Increament() {
    setQnty((prevQnty) => prevQnty + 1);
  }

  function Decreament() {
    if (qnty === 1) {
      setQnty(1);
    } else {
      setQnty((prevQnty) => prevQnty - 1);
    }
  }

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-md text-gray-900 font-semibold">Quantity</div>
      <div className="flex flex-row gap-x-2">
        <button
          onClick={Decreament}
          className="px-2  bg-gray-700 hover:bg-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13H5v-2h14v2z" />
          </svg>
        </button>
        <input
          type="number"
          min="1"
          max="20"
          value={qnty}
          onChange={handleChange}
          className="w-20 h-6 text-lg font-semibold text-center border border-slate-700 focus:outline-none "
        />
        <button
          onClick={Increament}
          className="px-2 bg-gray-700 hover:bg-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
