import React, { useState } from "react";

export default function MovieList({ movies, overlay, handleFavouritesClick }) {
  const Overlay = overlay;
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="d-flex justify-content-start m-3 image-container"
          onClick={() => handleFavouritesClick(movie)}
        >
          <img src={movie.Poster} alt="movie" height="300"></img>
          <div className="overlay ">
            <Overlay />
          </div>
        </div>
      ))}
    </>
  );
}
