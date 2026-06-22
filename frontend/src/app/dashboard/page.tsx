"use client";

import CreateTripForm from "@/components/CreateTripForm";
import TripList from "@/components/TripList";
import PackingList from "@/components/PackingList";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        AI Travel Planner Dashboard
      </h1>

      <CreateTripForm />
      <TripList />
      <PackingList destination="Goa" />
    </div>
  );
}