// <h1>Working with JSON</h1>

// <form id="myForm">
//     Task: <input type="text" name="task" placeholder="add task">
//     <input class="button" type="submit" value="Add new Task">
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
  if (sessionStorage["taskList"] != null) {
    dataJSON = JSON.parse(sessionStorage["taskList"]);
  } else {
    // let data = '[{"info":"Cut the Grass","status":true},{"info":"Clean Room","status":false},{"info":"Go to Gym","status":false},{"info":"Make Dinner","status":true}]';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let data = xhr.responseText;
        dataJSON = JSON.parse(data);
        buildCheckBoxes(dataJSON);
      }
    };
    xhr.open("GET", "http://api.myjson.com/bins/1bvxgw", true);
    xhr.send();

    dataJSON = JSON.parse(data);
  }
  buildCheckBoxes(dataJSON);
};

// Add new item
function addNewItem(data) {
  addCheckBox(data, dataJSON.length);
  dataJSON.push(data);
  sessionStorage["taskList"] = JSON.stringify(dataJSON);
}

function buildCheckBoxes(data) {
  for (let key in data) {
    let value = data[key];
    addCheckBox(value, key);
  }
}

function addCheckBox(data, key) {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let textInside = document.createTextNode(data.info);
  let span = document.createElement("span");

  span.innerHTML = "x";
  span.setAttribute("class", "list-item-delete");
  span.onclick = remove;
  checkbox.type = "checkbox";
  checkbox.value = key;
  checkbox.checked = data.status;
  checkbox.setAttribute("onchange", "updateJSON()");
  li.setAttribute("class", "list-item");
  li.appendChild(textInside);
  li.appendChild(checkbox);
  li.appendChild(span);
  document.querySelector("#taskList").appendChild(li);
}

function remove(e) {
  let index = this.previousElementSibling.value;
  taskList.innerHTML = "";
  dataJSON.splice(index, 1);
  buildCheckBoxes(dataJSON);
  sessionStorage["taskList"] = JSON.stringify(dataJSON);
}

// Function listens and updates the list item checked boxes
function updateJSON() {
  let key = event.target.value;
  let checked = event.target.checked;
  dataJSON[key].status = checked;
  sessionStorage["taskList"] = JSON.stringify(dataJSON);
}
