const valueDisplayer = document.getElementById("rangeValue");
const displayer = document.getElementById("displayer");

//Constants for the first and last charcode of each category
const lowerStart = 97;
const lowerEnd = 122;

const upperStart = 65;
const upperEnd = 90;

const numberStart = 48;
const numberEnd = 57;

//array the contains all the specials characters
const specials = [
  "@",
  "/",
  "-",
  "+",
  ".",
  ";",
  ",",
  "?",
  "!",
  "$",
  "~",
  "|",
  "°",
  "=",
  "€",
  "£",
  "$",
  "%",
  "*",
  "µ",
  "§",
];

let password = "";
//A function to create random to avoid to write a hundred time the same code
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//A different function to add each type character to the password
const addLower = () => {
  const letter = getRandom(lowerStart, lowerEnd + 1);
  password += String.fromCharCode(letter);
  console.log(password);
};

const addUpper = () => {
  const letter = getRandom(upperStart, upperEnd + 1);
  password += String.fromCharCode(letter);
};

const addNumber = () => {
  const number = getRandom(numberStart, numberEnd + 1);
  password += number;
};

const addSpecial = () => {
  const special = specials[getRandom(0, specials.length - 1)];
  password += special;
};

//setting the text content of the h2 that help us to know the value of the range input
valueDisplayer.textContent = passwordLenght.value;

passwordLenght.addEventListener("input", () => {
  valueDisplayer.textContent = passwordLenght.value;
});

// Event of the button to star create the password
generateButton.addEventListener("click", () => {
  password = "";
  const length = passwordLenght.value;
  const checkeBox = document.querySelectorAll("input[type='checkbox']");
  const checkedBox = [];
  // storing in an array all the checkboxes that are checked
  checkeBox.forEach((element) => {
    if (element.checked) {
      checkedBox.push(element.id);
    }
  });

  //if no checkboxes are checked instead of generating an empty password, the program will show an alert and exit the creation of the password
  if (checkedBox.length === 0) {
    alert("You must check at least one checkbox");
    return;
  }

  //Deciding the type of the character from all the user wants
  for (i = 0; i <= length; i++) {
    const type = checkedBox[getRandom(0, checkedBox.length)];

    switch (type) {
      case "upper":
        addUpper();
        break;

      case "lower":
        addLower();
        break;

      case "number":
        addNumber();
        break;

      case "specials":
        addSpecial();
        break;

      default:
        null;
    }
  }

  //Now that we have the password we can display it in the h2 and copy it into the clipboard
  displayer.textContent = password;
  navigator.clipboard.writeText(password);
  generateButton.textContent = "copied";

  //Reseting the text content to it's normal value after 3 seconds
  setTimeout(() => {
    generateButton.textContent = "Generate password";
  }, 3000);
});
