import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const tabItems = [
  "All",
  "Soccer",
  "Tennis",
  "Basketball",
  "Esports",
  "Table Tennis",
  "Volleyball",
  "Baseball",
];

const TabsMenu = () => {
  const [activeTab, setActiveTab] = useState("All"); // State to track the active tab

  return (
    <div className="flex justify-between items-center gap-4 py-4 rounded-lg w-full">
      <div className="flex items-center border-gray-500 bg-stone-900 px-4 py-2 border rounded-lg text-gray-400">
        <span className="text-lg material-icons-outlined">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search bets"
          className="bg-transparent ml-2 w-full outline-none"
        />
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {tabItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === item
                ? "bg-orange-500 text-black font-semibold"
                : "bg-stone-900 text-gray-400 hover:bg-stone-700 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsMenu;
