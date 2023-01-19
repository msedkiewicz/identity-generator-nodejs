const fs = require("fs");

const genderChoices = ["M", "F"];
const maleNames = [
  "John",
  "Jack",
  "Jose",
  "Jesus",
  "Tony",
  "Tom",
  "Timothy",
  "Peter",
  "Paul",
  "Adam",
  "Rob",
  "Pep",
  "Harry",
];
const femaleNames = [
  "Ann",
  "Lena",
  "Margaret",
  "Jane",
  "Magdalena",
  "Justine",
  "Katherine",
  "Teresa",
  "Elizabeth",
  "Mary",
  "Hedvig",
];
const lastNames = [
  "Doe",
  "Smith",
  "Richard",
  "Downhill",
  "Williamson",
  "Hanks",
  "Cruise",
  "McTominay",
  "Kane",
  "Maguire",
  "Guardiola",
];

const randomChoice = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length);
  return randomNum;
};

const people = [];

for (let i = 0; i < 20; i++) {
  const person = {};
  const gender = genderChoices[randomChoice(genderChoices)];
  person.gender = gender;
  if (gender === "M") person.name = maleNames[randomChoice(maleNames)];
  if (gender === "F") person.name = femaleNames[randomChoice(femaleNames)];
  person.lastName = lastNames[randomChoice(lastNames)];
  person.age = Math.floor(Math.random() * 100 + 1);
  people.push(person);
}

// console.log(people);

const data = JSON.stringify(people);

fs.writeFile("people.json", data, (err) => {
  if (err) throw err;
  console.log(people, "File has been successfully generated!");
});
1;
people.json;