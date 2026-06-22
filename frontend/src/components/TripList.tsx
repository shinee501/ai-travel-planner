"use client";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

import { useEffect, useState } from "react";
import axios from "axios";
import ItineraryCard from "./ItineraryCard";

export default function TripList() {
  const [trips, setTrips] = useState<any[]>([]);
  const [editingId, setEditingId] = useState("");
  const [editedItinerary, setEditedItinerary] =
    useState("");

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API_URL}/api/trips`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTrips(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTrip = async (id: string) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${API_URL}/api/trips/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTrips();
    } catch (error) {
      console.error(error);
    }
  };

  const editTrip = (trip: any) => {
    setEditingId(trip._id);
    setEditedItinerary(trip.itinerary);
  };

  const saveTrip = async (id: string) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API_URL}/api/trips/${id}`,
        {
          itinerary: editedItinerary,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditingId("");
      setEditedItinerary("");

      fetchTrips();
    } catch (error) {
      console.error(error);
    }
  };

  const regenerateDay = async (trip: any) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${API_URL}/api/ai/regenerate-day`,
        {
          destination: trip.destination,
          day: 1,
          interests: trip.interests,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditingId(trip._id);
      setEditedItinerary(
        res.data.regeneratedDay
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        My Trips
      </h2>

      {trips.length === 0 ? (
        <p>No trips found</p>
      ) : (
        trips.map((trip) => (
          <div key={trip._id}>
            <ItineraryCard
              trip={trip}
              onEdit={editTrip}
              onDelete={deleteTrip}
              onRegenerate={regenerateDay}
            />

            {editingId === trip._id && (
              <div className="border p-4 rounded mb-4">
                <textarea
                  value={editedItinerary}
                  onChange={(e) =>
                    setEditedItinerary(
                      e.target.value
                    )
                  }
                  rows={10}
                  className="w-full border p-2 rounded"
                />

                <div className="flex gap-2 mt-2">
  <button
    onClick={() => saveTrip(trip._id)}
    className="bg-green-500 text-white px-4 py-2 rounded"
  >
    Save Changes
  </button>

  <button
    onClick={() => {
      setEditingId("");
      setEditedItinerary("");
    }}
    className="bg-gray-500 text-white px-4 py-2 rounded"
  >
    Cancel
  </button>
</div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}