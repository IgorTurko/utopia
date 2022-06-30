const assert = require("chai").assert;

const positions = [
  { a: ["C", 2], b: ["D", 4], canAttack: true },
  { a: ["F", 7], b: ["E", 5], canAttack: true },
  { a: ["C", 2], b: ["A", 1], canAttack: true },
  { a: ["A", 6], b: ["B", 4], canAttack: true },
  { a: ["A", 6], b: ["B", 5] },
  { a: ["C", 2], b: ["C", 2] },
  { a: ["A", -1], b: ["B", 1] },
  { a: ["D", 4], b: ["E", 5] },
];

// implement this method to test if two knights threaten eachother
const canAttack = (a, b) => {
  return true;
};

positions.forEach((test) => {
  try {
    assert.equal(canAttack(test.a, test.b), !!test.canAttack);
  } catch (e) {
    console.error("FAILED", test);
  }
});
