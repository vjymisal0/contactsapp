import React from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex">
        <FiSearch className="text-white" />
        <input
          type="text"
          className="h-10 flex-grow bg-transparent  border-white rounded-md border"
        />
      </div>
    </div>
  );
};

export default App;
