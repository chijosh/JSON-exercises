let friend = myObj.friends;
let input = document.getElementById("input");

// for (let i in myObj.friends) {
//     let friend = myObj.friends;

//     let input = document.getElementById('input')
//     input.innerHTML += `${(Number(i) + 1)} : ${friend[i].firstName} ${friend[i].lastName}<br>`
//     console.log(`${friend[i].firstName} ${friend[i].lastName}`);
// }

// console.log(myObj)
friend.forEach(i => {
  input.innerHTML += `${i.firstName} ${i.lastName}<br>`;
  console.log(`${i.firstName} ${i.lastName}`);
});
