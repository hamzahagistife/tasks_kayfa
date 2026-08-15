const statsList = document.getElementById("stats");

const fallbackData = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

function renderStats(data) {
  statsList.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.className = `stat ${item.category.toLowerCase()}`;

    li.innerHTML = `
      <div class="stat-left">
        <img src="${item.icon}" alt="" />
        <span class="stat-name">${item.category}</span>
      </div>
      <p class="stat-score">${item.score} <span>/ 100</span></p>
    `;

    statsList.appendChild(li);
  });
}

async function loadStats() {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("Could not load data");
    const data = await res.json();
    renderStats(data);
  } catch (err) {
    renderStats(fallbackData);
  }
}

loadStats();
