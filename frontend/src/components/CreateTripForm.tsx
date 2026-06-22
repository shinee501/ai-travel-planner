"use client";

import { useState } from "react";
import axios from "axios";

export default function CreateTripForm() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budgetType, setBudgetType] = useState("Medium");
  const [interests, setInterests] = useState("");
  const [itinerary, setItinerary] = useState("");

  const handleGenerate = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/ai/generate-itinerary",
        {
          destination,
          days: Number(days),
          budgetType,
          interests: interests.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setItinerary(response.data.itinerary);
      await axios.post(
  "http://localhost:5000/api/trips",
  {
    destination,
    days: Number(days),
    budgetType,
    interests: interests.split(","),
    itinerary: response.data.itinerary,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
    } catch (error) {
      console.error(error);
      alert("Failed to generate itinerary");
    }
  };

  return (
    <div className="mt-6 space-y-3">
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="number"
        placeholder="Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        className="border p-2 w-full"
      />

      <select
        value={budgetType}
        onChange={(e) => setBudgetType(e.target.value)}
        className="border p-2 w-full"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="text"
        placeholder="Interests (Food, Adventure)"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        className="border p-2 w-full"
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Itinerary
      </button>

      {itinerary && (
        <div className="border p-4 mt-4 whitespace-pre-wrap">
          {itinerary}
        </div>
      )}
    </div>
  );
}