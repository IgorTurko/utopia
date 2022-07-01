import chai from "chai";

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

const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
const rows = [1, 2, 3, 4, 5, 6, 7, 8];
const movements = [
  [2, -1],
  [2, 1],
  [1, -2],
  [1, 2 ],
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2]
];

// wether the piece is on the board or outside
const validatePosition = (position) => {
  if (!position) {
    throw new Error("Position should not be empty");
  }
  if (position.length !== 2) {
    throw new Error("Position should contain row and column")
  }

  const column = columns.indexOf(position[0]);
  const row = rows.indexOf(position[1]);

  // outside the board
  if (column === -1 || row === -1) {
    return false;
  }

  return true;
}

// position example: ["A", 1]
const possibleMoves = (position) => {
  const isCurrentPositionValid = validatePosition(position)
  if (!isCurrentPositionValid) {
    return [];
  }

  const moves = [];
  const columnIndex = columns.indexOf(position[0]);
  const rowIndex = rows.indexOf(position[1]);
  
  for (const move of movements) {
    const newColumnIndex = columnIndex + move[0];
    const newRowIndex = rowIndex + move[1];
    const newPosition = [columns[newColumnIndex], rows[newRowIndex]];
    const isNewPositionValid = validatePosition(newPosition);

    if (isNewPositionValid) {
      moves.push(newPosition)
    }
  }

  return moves
}

// if piece "a" can have the same position as piece "b" then we can attack
const canAttack = (a, b) => {
  const moves = possibleMoves(a);

  for (const move of moves) {
    if (move[0] === b[0] && move[1] === b[1]) {
      return true;
    }
  }

  return false;
};

positions.forEach((test) => {
  try {
    chai.assert.equal(canAttack(test.a, test.b), !!test.canAttack);
    console.info(test.a, test.b, canAttack(test.a, test.b));
  } catch (e) {
    console.error("FAILED", test);
  }
});
