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

const el = document.querySelector("#my-unordered-list");
console.log(el);

const btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", btnhandler);

function btnhandler() {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<li/> List Item 1 </li>
<li/> List Item 2 </li> 
<li/> List Item 3 </li>`;
  el.appendChild(listItem);
}
