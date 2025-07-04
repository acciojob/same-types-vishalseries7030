
function isSameType(value1, value2) {
  // Check if both are NaN using Number.isNaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Otherwise, check if types are the same
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert to actual values where needed
let parsedValue1 = isNaN(Number(value1)) ? value1 : Number(value1);
let parsedValue2 = isNaN(Number(value2)) ? value2 : Number(value2);

// Special case for "NaN" string input
if (value1 === "NaN") parsedValue1 = NaN;
if (value2 === "NaN") parsedValue2 = NaN;

alert(isSameType(parsedValue1, parsedValue2));
