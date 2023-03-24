import React, { useState } from "react";

export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <img src={movie.Poster} alt="movie"></img>
      ))}
    </>
  );
}
