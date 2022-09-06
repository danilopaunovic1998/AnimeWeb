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
          <Link className="nav-link" to="/watchlist">
            WatchList
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/readlist">
            ReadList
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavCards;
