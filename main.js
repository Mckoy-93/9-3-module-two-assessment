// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
  // Add code you want to run on page load here
  const titleId = document.querySelector("#titles");
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const resetReview = document.querySelector("#reset-reviews");

  fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => res.json())
    .then((movie) => {
      console.log(movies);

      for (let movie of movies) {
        const option = document.createElement("option");
        option.setAttribute("value", `${movie.id}`);
        option.textContent = `${movie.title}`;
        titleId.append(option);
      }
    })

    .catch((error) => console.log(error));
}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

setTimeout(run, 1000);
