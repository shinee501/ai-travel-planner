import CreateTripForm from "../components/CreateTripForm";
import PackingList from "../components/PackingList";
import TripList from "../components/TripList";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        AI Travel Planner
      </h1>

      <CreateTripForm />

      <PackingList />

      <TripList />
    </div>
  );
}