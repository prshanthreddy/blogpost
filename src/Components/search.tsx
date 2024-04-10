"use client";
import React from "react";
export default function Search() {
  const onSearch = () => {
    console.log("searching...");
  };

  return (
    <div>
      <input type="text" placeholder="Search" className="border rounded py-2 px-4 mr-2 text-black font-bold " />
      <button onClick={onSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
        Search
      </button>
    </div>
  );
}
