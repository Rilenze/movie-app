import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);

  const requestAPI = async () => {
    const url = "https://www.omdbapi.com/?s=spider-man&apikey=ef918479";

    const response = await fetch(url);
    const responseJSON = await response.json();

    setMovies(responseJSON.Search);
  };

  useEffect(() => {
    requestAPI();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
