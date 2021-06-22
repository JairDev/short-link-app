import React from "react";
import "./link.css"

function Link({originalLink, shortLink}) {
  return (
    <div className="content-link">
      <div className="content-original-link">
        <p>{originalLink}</p>
      </div>

      <div className="content-short-link">
        <div className="short-link">
          <p>{shortLink}</p>
        </div>
        <div className="button-copy-link">
          <form>
            <button>copied</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Link
