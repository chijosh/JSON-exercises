//     <div class="container">
//         <div class="floater">
//             <span>E-Mail Address</span><input type="text" name="" id=""><br>
//             <span>Password</span><input type="text" name="" id=""><br>
//             <span>Confirm Password</span><input type="text" name="" id=""><br>
//         </div><br>
//         <button class="button">Reset Password</button>
//     </div>

// <div id="output">
//     <ul id="taskList">
//     </ul>
// </div>
// <form id="myForm">
//     Task: <input type="text" name="task" placeholder="add task">
//     <input type="submit" value="Add new Task">
// </form>

let dataJSON = "";
let output = document.getElementById("output");
let taskList = document.querySelector("#taskList");
document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();

  let tempValue = document.querySelector('input[name="task"]').value;
  addNewItem({ info: tempValue, status: false });
});

// Window onload
window.onload = function() {
  if (sessionStorage["task"] != null) {
    dataJSON = JSON.parse(sessionStorage["task"]);
  } else {
    let data =
      '[{"info":"Cut the Grass","status":true},{"info":"Clean Room","status":false},{"info":"Go to Gym","status":false},{"info":"Make Dinner","status":true}]';
    dataJSON = JSON.parse(data);
  }
  buildCheckBoxes(dataJSON);
};

// Add new item
function addNewItem(data) {
  addCheckBox(data, dataJSON.length);
  dataJSON.push(data);
}

function addCheckBox(data, key) {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let textInside = document.createTextNode(data.info);

  checkbox.type = "checkbox";
  checkbox.value = key;
  checkbox.checked = data.status;
  checkbox.setAttribute("onchange", "updateJSON()");
  li.appendChild(textInside);
  li.appendChild(checkbox);
  document.querySelector("#taskList").appendChild(li);
}

function buildCheckBoxes(data) {
  for (let key in data) {
    let value = data[key];
    addCheckBox(value, key);
  }
}

// Function listens and updates the list item checked boxes
function updateJSON() {
  let key = event.target.value;
  let checked = event.target.checked;
  dataJSON[key].status = checked;
  sessionStorage["task"] = JSON.stringify(dataJSON);
}
