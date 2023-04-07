import React from "react";

export default function SearchBox({ setSearchValue }) {
  return (
    <div className="col-3">
      <input
        className="form-control"
        placeholder="Type to search..."
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
    </div>
  );
}
