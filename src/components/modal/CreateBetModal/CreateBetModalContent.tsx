import React, { useState } from "react";
import PrimaryButton from "../../button/PrimaryButton";

type Game = {
  name: string;
  image: string;
};

type Games = {
  [key: string]: Game[];
};

const mockData = {
  categories: ["Sports", "E-Sports", "Politics", "Movies"],
  sports: {
    Sports: ["Soccer", "Basketball", "Tennis"],
    "E-Sports": ["CS:GO", "League of Legends", "Valorant"],
  },
  games: {
    Soccer: [
      { name: "Liverpool vs Manchester City", image: "soccer1.jpg" },
      { name: "Chelsea vs Arsenal", image: "soccer2.jpg" },
      { name: "Barcelona vs Real Madrid", image: "soccer3.jpg" },
    ],
    Basketball: [
      { name: "Lakers vs Warriors", image: "basketball1.jpg" },
      { name: "Heat vs Celtics", image: "basketball2.jpg" },
    ],
  } as Games,
  fees: {
    networkFee: 0.57,
    platformFee: 0.23,
    securityDeposit: 200,
  },
};

type SportsKeys = keyof typeof mockData.sports; // Define valid keys for 'sports'

const CreateBetModalContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SportsKeys>("Sports"); // Constrain to valid keys
  const [selectedSport, setSelectedSport] = useState("Soccer");
  const [selectedGame, setSelectedGame] = useState("");

  const { categories, sports, games, fees } = mockData;

  // Safely access games based on the selected sport
  const currentGames = games[selectedSport] || [];

  return (
    <div>
      <h2 className="mb-6 font-bold text-3xl text-white">Create Bet</h2>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-200">
          Category
        </label>
        <select
          className="bg-stone-800 p-2 rounded w-full text-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as SportsKeys)} // Type assertion here
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sport Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-400">Sport</label>
        <select
          className="bg-stone-800 p-2 rounded w-full text-white"
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
        >
          {sports[selectedCategory]?.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>

      {/* Game Dropdown with Images */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-400">Game</label>
        <div className="gap-4 grid grid-cols-2">
          {currentGames.map((game) => (
            <div
              key={game.name}
              className={`p-2 rounded bg-stone-800 text-white cursor-pointer ${
                selectedGame === game.name ? "border border-orange-500" : ""
              }`}
              onClick={() => setSelectedGame(game.name)}
            >
              <img
                src={game.image}
                alt={game.name}
                className="mb-2 rounded w-full h-16 object-cover"
              />
              <span>{game.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Title Input */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-400">Title</label>
        <input
          type="text"
          value={`Will ${selectedGame || "the game"} end as expected?`}
          className="bg-stone-800 p-2 rounded w-full text-white"
          readOnly
        />
      </div>

      {/* Fees Section */}
      <div className="border-stone-700 py-4 border-t">
        <div className="flex justify-between mb-2 text-gray-400">
          <span>Network Fee</span>
          <span>{fees.networkFee} ADA</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-400">
          <span>Platform Fee</span>
          <span>{fees.platformFee} ADA</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-400">
          <span>Refundable Security Deposit</span>
          <span>{fees.securityDeposit} ADA</span>
        </div>
        <div className="flex justify-between font-bold text-white">
          <span>Total Fees</span>
          <span>
            {(
              fees.networkFee +
              fees.platformFee +
              fees.securityDeposit
            ).toFixed(2)}{" "}
            ADA
          </span>
        </div>
      </div>

      <PrimaryButton classNames="bg-orange-500 mt-4 p-6 rounded-full w-full text-white">
        Create Bet
      </PrimaryButton>
    </div>
  );
};

export default CreateBetModalContent;
