const fs = require("fs");

const findPersonNumberByName = (personName) => {
  // phoneBook is already sorted by name as stated in the document
  const phoneBook = JSON.parse(fs.readFileSync("./phoneBook.json"));

  const personWasFoundPosition = binarySearchName(personName, phoneBook);
  if (personWasFoundPosition < 0) {
    throw new Error("Person Not Found");
  }

  return phoneBook[personWasFoundPosition].phone;
};

const binarySearchName = (name, phoneBook) => {
  let start = 0;
  let end = phoneBook.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (phoneBook[middle].name === name) {
      return middle;
    } else if (phoneBook[middle].name < name) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

const personName = "Louise Ballard";
console.log(findPersonNumberByName(personName));
