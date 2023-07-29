import React from "react";
import ImageComponent from "./ImageComponent";

export default function MovieList({ movies, overlay, handleFavouritesClick }) {
  return (
    <>
      {movies.map((movie) => {
        if (movie.Poster === "N/A") return null;
        return (
          <div key={movie.imdbID}>
            <ImageComponent
              imageUrl={movie.Poster}
              handleFavouritesClick={handleFavouritesClick}
              movie={movie}
              overlay={overlay}
            />
          </div>
        );
      })}
    </>
  );
}
