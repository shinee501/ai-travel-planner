const generateContent = require("../services/geminiService");

const generateItinerary = async (req, res) => {
  try {
    const {
      destination,
      days,
      budgetType,
      interests,
    } = req.body;

    const prompt = `
You are a professional travel planner.

Create a detailed travel plan.

Destination: ${destination}
Days: ${days}
Budget Type: ${budgetType}
Interests: ${interests.join(", ")}

Return in this exact format:

DAY-BY-DAY ITINERARY

Day 1:
- Activity 1
- Activity 2

Day 2:
- Activity 1
- Activity 2

ESTIMATED BUDGET

Flights:
Accommodation:
Food:
Activities:
Transportation:

Total Estimated Budget:

RECOMMENDED HOTELS

Budget:
- Hotel Name

Mid Range:
- Hotel Name

Luxury:
- Hotel Name
`;

    let itinerary;

    try {
      itinerary = await generateContent(prompt);
    } catch (err) {
      console.log(
        "Gemini quota exceeded. Using fallback itinerary."
      );

      itinerary = `
DAY-BY-DAY ITINERARY

Day 1:
- Explore local attractions
- Try local food

Day 2:
- Adventure activities
- Shopping

ESTIMATED BUDGET

Flights: $400
Accommodation: $300
Food: $150
Activities: $100
Transportation: $50

Total Estimated Budget: $1000

RECOMMENDED HOTELS

Budget:
- Budget Stay Inn

Mid Range:
- Comfort Hotel

Luxury:
- Grand Resort
`;
    }

    res.json({ itinerary });
  } catch (error) {
    console.error("Generate Itinerary Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const regenerateDay = async (req, res) => {
  try {
    const {
      destination,
      day,
      interests,
    } = req.body;

    const prompt = `
Destination: ${destination}

Regenerate only Day ${day}
with more ${interests.join(", ")} activities.

Return only the activities for that day.
`;

    let regeneratedDay;

    try {
      regeneratedDay = await generateContent(prompt);
    } catch (err) {
      console.log(
        "Gemini quota exceeded. Using fallback response."
      );

      regeneratedDay = `
Day ${day}
- Beach Trekking
- Outdoor Cycling
- Nature Photography
- Sunset View Point
`;
    }

    res.json({ regeneratedDay });
  } catch (error) {
    console.error(
      "Regenerate Day Error:",
      error
    );

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  generateItinerary,
  regenerateDay,
};