import React, { useState } from "react";

export default function MovieList({ movies, overlay, handleFavouritesClick }) {
  const Overlay = overlay;
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="d-flex justify-content-start image-container"
        >
          <img src={movie.Poster} alt="movie" className="img-fluid"></img>
          <div className="overlay" onClick={() => handleFavouritesClick(movie)}>
            <Overlay />
          </div>
        </div>
      ))}
    </>
  );
}
