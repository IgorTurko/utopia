import chai from "chai";

const names = [
  "Michael Daniel Jäger",
  "LINUS HARALD christer WAHLGREN",
  "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
  "Kalle Anka",
  "Ghandi",
];

const expected = [
  { first: "Michael", middle: ["Daniel"], last: "Jäger" },
  { first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren" },
  {
    first: "Pippilotta",
    middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"],
    last: "Långstrump",
  },
  { first: "Kalle", middle: [], last: "Anka" },
  { first: "Ghandi", middle: [], last: null },
];

const validate = (result) => {
  try {
    chai.assert.deepEqual(result, expected);
    console.info("Succeed!!!");
  } catch (e) {
    console.error("Failed", e);
  }
};

const capitalizeFirstLetter = (str) => {
  if (!str) {
    throw new Error('Input should not be empty')
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const splitName = (name) => {
  const parts = name.split(" ");

  const first = parts.length >= 1 ? parts[0] : null;
  const middle = parts.length >= 3 ? parts.slice(1, parts.length - 1) : [];
  const last = (parts.length === 2 || parts.length >= 3) ? parts[parts.length -1] : null;

  return {
    first: first ? capitalizeFirstLetter(first) : null,
    middle: middle.map(capitalizeFirstLetter),
    last: last ? capitalizeFirstLetter(last) : null
  }
}

const result = names.map(splitName);

validate(result);
