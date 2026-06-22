import CreateTripForm from "../components/CreateTripForm";
import TripList from "../components/TripList";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        AI Travel Planner
      </h1>

      <CreateTripForm />

      <TripList />
    </div>
  );
}