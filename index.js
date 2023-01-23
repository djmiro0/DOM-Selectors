//SELECT ALL THE ELEMENTS FROM OUR HTML
//--------------------------------------
//querySelector = CSS selectors # for id , . for class, tagname for tagname.
let btnAddItem = document.querySelector("#btn-add-item");
//example using elementById (we do not have to add css selectors (#n . ))
let list = document.getElementById("list-items");
let btnColorize = document.querySelector("#btn-colorize");

//getting a list of child elements
let listItemsLi = document.getElementsByClassName("list-item-child");
console.log("the list of items is", listItemsLi);

//APPLY LOGIC TO THEM
btnAddItem.onclick = () => {
  console.log("I got clicked");
  //SHOWS THE WINDOW
  let listItem = window.prompt(
    "What do I have to add to the list?",
    "new list item"
  );

  console.log(listItem);

  //if a lisitem was supplied.
  if (listItem != null && listItem != "") {
    //Create an Element (new listitem)
    let newLi = document.createElement("li"); //<li></li>
    newLi.classList.add("list-item-child"); //<li class="list-item-child"></li>
    console.log("the classlist", newLi.classList);
    newLi.innerText = listItem; //<li class="list-item-child">Text (supplied in prompt)</li>
    //adding child element to the unorderd list
    list.appendChild(newLi);
  }
};

btnColorize.onclick = () => {
  //let listItemsLi = document.querySelectorAll('.list-item-child');
  console.log("The colorize button was clicked");
  console.log(listItemsLi);
  for (let item of listItemsLi) {
    item.style.color = generateRandomColor();
  }
};

//use of separate function can be done here
const generateRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let j = 0; j < 6; j++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  //randomColor += "50";
  return randomColor;
};
