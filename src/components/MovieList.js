import React, { useState } from "react";

export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.imdbID} className="d-flex justify-content-start image">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
}
