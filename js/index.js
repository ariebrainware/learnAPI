$(function () {
  

  fetch("https://swapi.co/api/")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });

  // Level 0
  fetch("https://swapi.co/api/people/")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });

  // Level 1

  fetch("https://swapi.co/api/people/")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.results);
    });

})