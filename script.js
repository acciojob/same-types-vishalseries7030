
function isSameType(value1, value2) {
  const bothNaN = Number.isNaN(value1) && Number.isNaN(value2);
  if (bothNaN) return true;

  // If either is NaN (but not both), return false
  if (Number.isNaN(value1) || Number.isNaN(value2)) return false;

  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert input strings to actual values
function parseValue(val) {
  if (val === "NaN") return NaN;
  if (!isNaN(Number(val))) return Number(val);
  return val;
}

const parsed1 = parseValue(value1);
const parsed2 = parseValue(value2);

alert(isSameType(parsed1, parsed2));
