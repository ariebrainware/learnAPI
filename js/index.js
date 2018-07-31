fetch("https://swapi.co/api/starships")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
