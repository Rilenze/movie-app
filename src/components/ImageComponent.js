import React, { useEffect, useState } from "react";

export default function ImageComponent({
  imageUrl,
  handleFavouritesClick,
  movie,
  overlay,
}) {
  const Overlay = overlay;

  const [validUrl, setValidUrl] = useState(true);

  useEffect(() => {
    if (imageUrl === "N/A") setValidUrl(false);
  }, []);

  const handleErrorImage = () => {
    setValidUrl(false);
  };

  if (!validUrl) return undefined;
  return (
    <div
      className="d-flex justify-content-start m-3 image-container"
      onClick={() => handleFavouritesClick(movie)}
    >
      <img src={imageUrl} alt="Movie" height="350" onError={handleErrorImage} />
      <div className="overlay ">
        <Overlay />
      </div>
    </div>
  );
}
