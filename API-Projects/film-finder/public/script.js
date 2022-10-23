const tmdbKey = "api key";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

// fetching a list of genres from the API
const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`; // using query paramenters to add more specificity to our request.
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`; //putting together the URL where the fetch request will be sent.

  //catching and handling possible errors
  try {
    const response = await fetch(urlToFetch); //using fetch to send a get request to the url while awaiting the response.
    if (response.ok) {
      // to be executed if response object property evaluates to truthy.
      //to get the data needed to populate the drop down menu.
      const jsonResponse = await response.json(); //to get the reuquested data. We also await the resolution here.
      // console.log(jsonResponse);
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

//to fetch a list of movies based on the genre selected from the list of genres returnes in getGenres.
const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie"; // endpoint to discover endpoint
  const requestParams = `?api_key=${tmdbKey}, with_genres =${selectedGenre}`; // second parameter is set to a variable that stores returned value from a helper function. the getSelectedGenre() function in helpers.js that captures the user's selected genre.
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`; //putting together the URL where the fetch request will be sent.
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json(); //converts to an awaiting json object
      //  console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};
// getMovies();

//fetching details of a random movie from the list of movies returned in getMovies function
const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = "/movie/{movieId}"; //
  // Gets a list of movies and ultimately displays the info of a random movie from the list
  const requestParams = `?api_Key=${tmdbKey}`; //query string with one paramenter
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch); // using fetch to send a get request to urlToFetch
    if (response.ok) {
      //response contains a single object with details about the given movie. We will now convert it to a json object.
      const movieInfo = response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

//Piecing together, all the functionalities to render a random movie's info to the page.
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info); //to display what we have from the api
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
