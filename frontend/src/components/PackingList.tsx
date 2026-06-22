"use client";

type Props = {
  destination: string;
};

export default function PackingList({
  destination,
}: Props) {
  const items = [
    "Passport / ID",
    "Phone Charger",
    "Power Bank",
    "Water Bottle",
    "Comfortable Shoes",
  ];

  if (
    destination.toLowerCase().includes("goa")
  ) {
    items.push(
      "Sunglasses",
      "Sunscreen",
      "Beachwear"
    );
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h2 className="text-xl font-bold mb-2">
        Packing Checklist
      </h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
}