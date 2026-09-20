// Task 3 — Analyze Range

// Expected results (written before running the code):
// analyzeRange(1, 10) -> 5 even numbers, sum 30 | 5 odd numbers | total sum 55
// analyzeRange(10, 1) -> "Invalid range"
// countMultiples(1, 20, 3) -> 6   (3, 6, 9, 12, 15, 18)

function analyzeRange(start, end) {
  if (start > end) {
    return "Invalid range";
  }

  // Counters and accumulators.
  let evenCount = 0;
  let oddCount = 0;
  let evenSum = 0;
  let totalSum = 0;

  // The loop includes both start and end.
  for (let currentNumber = start; currentNumber <= end; currentNumber++) {
    if (currentNumber % 2 === 0) {
      evenCount = evenCount + 1;
      evenSum = evenSum + currentNumber;
    } else {
      oddCount = oddCount + 1;
    }

    totalSum = totalSum + currentNumber;
  }

  return `Range ${start} to ${end} -> even numbers: ${evenCount} (sum ${evenSum}), odd numbers: ${oddCount}, sum of all numbers: ${totalSum}`;
}

// Bonus: how many numbers in the range divide exactly by the divisor.
function countMultiples(start, end, divisor) {
  // Dividing by zero has no meaning, so nothing can be counted.
  if (start > end || divisor === 0) {
    return 0;
  }

  let multiplesCount = 0;

  for (let currentNumber = start; currentNumber <= end; currentNumber++) {
    if (currentNumber % divisor === 0) {
      multiplesCount = multiplesCount + 1;
    }
  }

  return multiplesCount;
}

// The returned value is stored first, then printed.
const rangeSummary = analyzeRange(1, 10);
console.log(rangeSummary);

const invalidSummary = analyzeRange(10, 1);
console.log(invalidSummary);

const multiplesOfThree = countMultiples(1, 20, 3);
console.log(`Multiples of 3 between 1 and 20: ${multiplesOfThree}`);
