import React from "react";
import { Link } from "react-router-dom";

function NavCards() {
  return (
    <div className="nav-div">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/*">
            Anime
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/manga">
            Manga
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link">WatchList</a>
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
