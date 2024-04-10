"use client";
import React from "react";
import Search from "./search";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-900">
      <h1 className="text-3xl font-bold text-white p-4">Blogpost</h1>
      <div className="flex items-center p-4">
        <Search />
      </div>
    </div>
  );
}
    