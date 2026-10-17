// Task 8 — Destructuring, Spread & Rest

// ---------- Data ----------
const team = {
  name: "Egypt",
  coach: { name: "Hossam Hassan", nationality: "Egyptian" },
  stadium: { name: "Cairo Stadium", city: "Cairo", capacity: 75000 },
  colors: ["red", "white", "black"],
  founded: 1921,
};

const players = [
  { id: 1, name: "Salah", number: 10, position: "Forward", age: 34, goals: 20, assists: 10 },
  { id: 2, name: "Marmoush", number: 7, position: "Forward", age: 27, goals: 15, assists: 6 },
  { id: 3, name: "Trezeguet", number: 11, position: "Winger", age: 31, goals: 9, assists: 8 },
  { id: 4, name: "Zizo", number: 25, position: "Midfielder", age: 30, goals: 6, assists: 11 },
  { id: 5, name: "Emam Ashour", number: 8, position: "Midfielder", age: 28, goals: 5, assists: 7 },
  { id: 6, name: "El Shenawy", number: 1, position: "Goalkeeper", age: 37, goals: 0, assists: 0 },
];

const matches = [
  { opponent: "Ghana", score: [2, 0], goals: ["Salah", "Marmoush"] },
  { opponent: "Morocco", score: [1, 1], goals: ["Trezeguet"] },
  { opponent: "Senegal", score: [3, 2], goals: ["Salah", "Zizo", "Salah"] },
];

const bench = ["Hamdi Fathy", "Mostafa Fathi", "Akram Tawfik"];

const settings = { theme: "light", language: "ar", notifications: true };

// 1) name and founded from team
const { name: teamName, founded } = team;
console.log("1)", teamName, founded);

// 2) the coach name, saved as coachName
const { coach: { name: coachName } } = team;
console.log("2)", coachName);

// 3) city and capacity from team.stadium
const { stadium: { city, capacity } } = team;
console.log("3)", city, capacity);

// 4) the first and the second colors
const [firstColor, secondColor] = team.colors;
console.log("4)", firstColor, secondColor);

// 5) the third color only (the first two places are skipped)
const [, , thirdColor] = team.colors;
console.log("5)", thirdColor);

// 6) nickname does not exist in team, so the default value is used
const { nickname = "The Pharaohs" } = team;
console.log("6)", nickname);

// 7) the first player, then his name and goals
const [firstPlayer] = players;
const { name: firstPlayerName, goals: firstPlayerGoals } = firstPlayer;
console.log("7)", firstPlayerName, firstPlayerGoals);

// 8) the first player, and the rest of them in others
const [starter, ...others] = players;
console.log("8)", starter.name, "| others:", others.length, "players");

// 9) opponent and both numbers of the score from the first match
const { opponent: firstOpponent, score: [homeGoals, awayGoals] } = matches[0];
console.log("9)", firstOpponent, homeGoals, awayGoals);

// 10) Egypt 2 - 0 Ghana
console.log("10)");
for (const { opponent, score: [home, away] } of matches) {
  console.log(`${team.name} ${home} - ${away} ${opponent}`);
}

// 11) #10 Salah — Forward
console.log("11)");
for (const { number, name, position } of players) {
  console.log(`#${number} ${name} — ${position}`);
}

// 12) an array of the names only
const playerNames = players.map(({ name }) => name);
console.log("12)", playerNames);

// 13) a function with a destructured parameter
function printPlayer({ name, age, position }) {
  console.log(`${name} | ${age} years | ${position}`);
}

console.log("13)");
players.forEach((player) => printPlayer(player));

// 14) a default value inside the parameter
function describe({ name, position = "Unknown" }) {
  return `${name} plays as ${position}`;
}

console.log("14)", describe({ name: "New Player" }));

// 15) every name from players and bench in one array
const allPlayers = [...playerNames, ...bench];
console.log("15)", allPlayers);

// 16) the colors plus gold
const newColors = [...team.colors, "gold"];
console.log("16)", newColors);

// 17) a copy of settings with a different theme
const darkSettings = { ...settings, theme: "dark" };
console.log("17)", darkSettings);

// 18) a copy of team with a different founded year
const oldTeam = { ...team, founded: 1920 };
console.log("18)", oldTeam.name, oldTeam.founded);

// 19) the originals did not change
console.log("19)", settings, team.founded);

// 20) the first player plus captain: true
const star = { ...players[0], captain: true };
console.log("20)", star);

// 21) a copy of the second player with one more goal
const scorer = { ...players[1], goals: players[1].goals + 1 };
console.log("21)", scorer.name, players[1].goals, "->", scorer.goals);

// 22) notifications is removed, the rest stays in basic
const { notifications, ...basic } = settings;
console.log("22)", basic);

// 23) id is removed, the rest stays in info
const { id, ...info } = players[0];
console.log("23)", info);

// 24) rest parameters
function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total = total + number;
  }

  return total;
}

const goalsOfAllPlayers = players.map(({ goals }) => goals);
console.log("24)", sum(...goalsOfAllPlayers));

// 25) the biggest number
function maxGoals(...numbers) {
  let biggest = numbers[0];

  for (const number of numbers) {
    if (number > biggest) {
      biggest = number;
    }
  }

  return biggest;
}

console.log("25)", maxGoals(...goalsOfAllPlayers));

// 26) Math.max with spread
const ages = players.map(({ age }) => age);
console.log("26)", Math.max(...ages));

// 27) rest + spread together.
// The task does not say where the names live inside team, so the function takes a
// list of names (allPlayers from point 15) and adds the new ones to it.
function addPlayers(team, ...names) {
  return [...team, ...names];
}

console.log("27)", addPlayers(allPlayers, "Mohamed Hany", "Ahmed Sayed"));

// 28) copy is the SAME object, so team changes too
const copy = team;
copy.name = "Ghana";
console.log("28)", team.name); // Ghana

// 29) a spread copy is shallow, so the nested stadium is still shared
const copy2 = { ...team };
copy2.stadium.city = "Giza";
console.log("29)", team.stadium.city); // Giza

// 30) structuredClone makes a deep copy, so the original is safe
const copy3 = structuredClone(team);
copy3.stadium.city = "Alexandria";
console.log("30)", copy3.stadium.city, "| original:", team.stadium.city);

// 31) prediction before running:
// players[0] === players[0] -> true  (the same object in memory)
// {} === {}                 -> false (two different objects)
console.log("31)", players[0] === players[0], {} === {});

// 32) a new player with age + 1, the original stays as it is
function growOlder(player) {
  return { ...player, age: player.age + 1 };
}

const olderSalah = growOlder(players[0]);
console.log("32)", olderSalah.age, "| original:", players[0].age);

// ---------- Bonus ----------
// How many goals Salah scored in the matches
let salahGoals = 0;

for (const { goals } of matches) {
  for (const scorerName of goals) {
    if (scorerName === "Salah") {
      salahGoals = salahGoals + 1;
    }
  }
}

console.log("Bonus 1) Salah goals:", salahGoals);

// wins, draws and losses
let wins = 0;
let draws = 0;
let losses = 0;

for (const { score: [home, away] } of matches) {
  if (home > away) {
    wins = wins + 1;
  } else if (home === away) {
    draws = draws + 1;
  } else {
    losses = losses + 1;
  }
}

const record = { wins, draws, losses };
console.log("Bonus 2)", record);
