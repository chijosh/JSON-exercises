// <h1>Working with JSON</h1>

// <div id="output">
// </div>
// <button class="button" id="loadNew">Load</button>

const output = document.getElementById("output");
const buttonClick = document.getElementById("loadNew");
buttonClick.addEventListener("click", () => {
  loadAjax();
});

function loadAjax() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    // console.log('ready state: ', xhr.readyState, 'status: ', xhr.status);
    if (xhr.readyState === 4 && xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);
      let data = json.results[0];
      let message = `<h2>${data.name.first} ${data.name.last}</h2><br><img src="${data.picture.large}">`;

      output.innerHTML = message;
      // console.log(message);
    }
  };
  xhr.open("GET", "https://randomuser.me/api/", true);
  xhr.send();
}
