"use client";

type Props = {
  trip: any;
  onEdit: (trip: any) => void;
  onDelete: (id: string) => void;
  onRegenerate: (trip: any) => void;
};

export default function ItineraryCard({
  trip,
  onEdit,
  onDelete,
  onRegenerate,
}: Props) {
  return (
    <div className="border rounded-lg p-4 shadow mb-4 bg-white">
      <h2 className="text-xl font-bold">
        {trip.destination}
      </h2>

      <p>
        <strong>Days:</strong> {trip.days}
      </p>

      <p>
        <strong>Budget:</strong> {trip.budgetType}
      </p>

      <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded mt-3">
        {trip.itinerary}
      </pre>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(trip)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onRegenerate(trip)}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Regenerate Day
        </button>

        <button
          onClick={() => onDelete(trip._id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}