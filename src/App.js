import React, { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Spider-Man",
      Year: "2002",
      imdbID: "tt0145487",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: No Way Home",
      Year: "2021",
      imdbID: "tt10872600",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: Homecoming",
      Year: "2017",
      imdbID: "tt2250912",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    },
  ]);

  return <MovieList movies={movies} />;
}

export default App;
