import React from "react";
import api from "../services/jikenAPI";
import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import ListElement from "../components/ListElement";

function WatchList() {
  const [watchlist, SetWatchList] = useState([]);
  useEffect(() => {
    getListElements();
  }, []);
  function getListElements() {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/profile/watchlist",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.auth_token,
      },
    };

    axios(config)
      .then(function (response) {
        SetWatchList(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //console.log(watchlist);
  return (
    <div>
      <div className="list-div">
        <h1>My Watch List</h1>
        {watchlist == null ? (
          <h2>Your watch list is empty</h2>
        ) : (
          watchlist.map((anime) => (
            <ListElement
              key={anime.anime_id}
              element_id={anime.anime_id}
              page={"anime/"}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default WatchList;
