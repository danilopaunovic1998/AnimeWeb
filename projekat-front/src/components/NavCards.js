import React from "react";

function NavCards() {
  return (
    <div className="nav-div">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#!">
            Anime
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            Manga
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            WatchList
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            ReadList
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavCards;
