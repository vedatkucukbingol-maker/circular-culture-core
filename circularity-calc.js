// Circular Culture - Basic Circularity Metric Calculator
function calculateCircularity(recycledInput, totalInput, recoveredWaste, totalWaste) {
    const inputRatio = recycledInput / totalInput;
    const outputRatio = recoveredWaste / totalWaste;
    const score = ((inputRatio + outputRatio) / 2) * 100;
    return `Your Circularity Score is: %${score.toFixed(2)}`;
}
console.log(calculateCircularity(40, 100, 30, 100));
