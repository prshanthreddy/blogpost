"use client";
import React from "react";
import Search from "./search";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-900">
      <h1 className="flex items-center text-white p-4 text-bolder hover:text-blue-500 justify-end">Blogpost</h1>
      <div className="flex items-center p-4">
        <Search />
      </div>
    </div>
  );
}
    