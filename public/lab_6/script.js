// You may wish to find an effective randomizer function on MDN.

const { default: countries } = require("./countries");

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      function getRandomInt(min, max) {
        min1 = Math.ceil(min);
        max1 = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
      console.log(countries.length);
      console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});