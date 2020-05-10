// <div id="output">
//     <ul id="taskList">
//     </ul>
// </div>

let output = document.getElementById("output");
let taskList = document.querySelector("#taskList");

// Data
let data =
  '{"tasks":{"Cut Grass":true,"Clean Room":false,"Go to Gym":true,"Make dinner":false}}';
let dataJSON = JSON.parse(data);

// Loop through data to extract the key and value
for (let key in dataJSON.tasks) {
  let value = dataJSON.tasks[key];

  console.log(key, value);

  // Verify is key if true or false
  let status = !dataJSON.tasks[key] ? "" : "checked";

  // Create list item, insert into html
  let html = `<li>${key} <input type="checkbox" value="${key}" ${status}></input></li>`;
  taskList.innerHTML += html;
}

// Function listens for events on list item checked boxes
addEvents();
function addEvents() {
  let checkBoxes = document.querySelectorAll(
    '#taskList input[type="checkbox"]'
  );
  for (let index in checkBoxes) {
    checkBoxes[index].onchange = updateJSON;
  }
  // console.log(checkBoxes);
}

// Function updates the list item checked boxes
function updateJSON() {
  let value = event.target.value;

  // console.log(value, event.target.checked);
  dataJSON.tasks[value] = event.target.checked;
}
