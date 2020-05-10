// <form id="myForm">
//     <input type="text" name="first" value="Laurence"><br>
//     <input type="text" name="last" value="Svekis"><br>
//     <input type="text" name="email" value="test@test.com"><br>
//     <input type="text" name="company" value="ImperiaLink">
//     <br>
//     <input type="submit" value="submit">
// </form>

let output = document.getElementById("myForm");

window.onload = function() {
  if (sessionStorage["person"] != null) {
    let data = JSON.parse(sessionStorage["person"]);
    let message = `Hello ${data.first} ${data.last}, welcome to my site.`;
    document.getElementById("input").innerHTML = message;
    console.log(data);
  }
};

output.addEventListener("submit", e => {
  e.preventDefault();
  let data = JSON.stringify(formData(output));
  if (data) {
    sessionStorage["person"] = data;
  }
  console.log(data);
});

function formData(form) {
  let el = form.querySelectorAll('input[type="text"]');
  let myData = {};
  for (let i = 0; i < el.length; i++) {
    let name = el[i].name;
    let value = el[i].value;
    console.log(name, value);
    myData[name] = value;
  }

  return myData;
}
console.log();
