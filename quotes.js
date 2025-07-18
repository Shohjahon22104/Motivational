const quotes = [
  "Start strong and never look back.",
  "One step at a time beats no steps at all.",
  "You don’t have to be extreme, just consistent.",
  "Build habits, not excuses.",
  "Keep showing up.",
  "A little progress each day adds up to big results.",
  "Discipline beats motivation."
  // Add all 83 quotes here...
];

const today = new Date();
const start = new Date("2025-07-19"); // Day 1
const dayIndex = Math.floor((today - start) / (1000 * 60 * 60 * 24));
const quote = quotes[dayIndex] || "Stay focused and keep going.";

document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote-of-the-day");
  if (quoteElement) {
    quoteElement.textContent = quote;
  }
});
