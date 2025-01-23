// console.log("im connected");
// const person = {
//   name: "Tucker Chaney",
//   age: 25,
//   greet: function () {
//     console.log("Hello ${name}");
//   },
// };
// person.greet = function (name) {
//   console.log(`Hello ${name}`);
// };
// person.greet("");

// const el = document.querySelector("#my-unordered-list");
// console.log(el);

// const btn = document.querySelector("#btn");
// console.log(btn);

// btn.addEventListener("click", btnhandler);

// function btnhandler() {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `<li/> List Item 1 </li>
// <li/> List Item 2 </li>
// <li/> List Item 3 </li>`;
//   el.appendChild(listItem);
// }
const car = {
  make: "Ford",
  model: "Taurus",
  year: "1993",
};
console.log("I drive a", car.year, car.make, car.model);

const student = {
  name: "Tucker",
  age: 25,
  grades: [10, 10, 10, 0, 0],
  averageGrade: function () {
    const total = this.grades.reduce(function (acc, grade) {
      return acc + grade;
    }, 0);
    return total / this.grades.length;
  },
};
console.log(
  `My student ${student.name}, age ${
    student.age
  }, has an average grade of:${student.averageGrade()}`
);

const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function () {
  myBtn.style.backgroundColor = "lightblue";
  console.log("I clicked");
});

const textBtn = document.getElementById("textBtn");
const myParagraph = document.getElementById("myParagraph");

textBtn.addEventListener("click", function () {
  myParagraph.textContent = "new text!";
});

const myList = document.getElementById("myList");
const btnList = document.getElementById("btnList");

function addToList() {
  const listItem = document.createElement("li");
  listItem.textContent = "New List Item";
  myList.appendChild(listItem);
}
btnList.addEventListener("click", addToList);
