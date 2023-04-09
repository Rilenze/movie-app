import React, { useEffect, useState, useRef } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const requestAPI = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ef918479`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    requestAPI(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("movie-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    if (favourites.includes(movie)) return;
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (movie2) => movie.imdbID !== movie2.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollBy({
            left: e.deltaY < 0 ? -50 : 50,
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox setSearchValue={setSearchValue} />
      </div>
      <div
        className="row flex-nowrap horizontal-list"
        ref={useHorizontalScroll()}
      >
        <MovieList
          movies={movies}
          overlay={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div
        className="row flex-nowrap horizontal-list"
        ref={useHorizontalScroll()}
      >
        <MovieList
          movies={favourites}
          overlay={RemoveFavourites}
          handleFavouritesClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
