const startDate = new Date("2025-07-19");
const totalDays = 83;
const calendarEl = document.getElementById("calendar");

for (let i = 0; i < totalDays; i++) {
  const currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + i);

  const dateStr = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const noteId = `note-${i}`;
  const savedNote = localStorage.getItem(noteId) || "";

  const dayBox = document.createElement("div");
  dayBox.className = "day-box";

  const title = document.createElement("h3");
  title.textContent = `Day ${i + 1} – ${dateStr}`;
  dayBox.appendChild(title);

  const toggleBtn = document.createElement("div");
  toggleBtn.className = "note-preview";
  toggleBtn.textContent = savedNote
    ? "📘 View/Edit note"
    : "📝 Click to add note";
  toggleBtn.onclick = () => {
    textarea.style.display =
      textarea.style.display === "block" ? "none" : "block";
  };
  dayBox.appendChild(toggleBtn);

  const textarea = document.createElement("textarea");
  textarea.value = savedNote;
  textarea.id = noteId;
  textarea.style.display = "none";
  textarea.oninput = () => {
    localStorage.setItem(noteId, textarea.value);
    toggleBtn.textContent = textarea.value
      ? "📘 View/Edit note"
      : "📝 Click to add note";
  };
  dayBox.appendChild(textarea);

  calendarEl.appendChild(dayBox);
}
