import React from "react";
import "./searchShortLink.css"

function SearchShortLink() {
  return (
    <div className="link-content-short">
      <form>
        <div className="link-content input">
          <input placeholder="Shorten a link here..." />
        </div>
        <div className="link-content button">
          <button>Shorten It!</button>
        </div>
      </form>
    </div>
  );
}

export default SearchShortLink;
