import React from "react";
import api from "../services/jikenAPI";
import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import ListElement from "../components/ListElement";
import { useNavigate } from "react-router-dom";

function ReadList({ token, popup }) {
  let navigate = useNavigate();
  const [readlist, SetReadList] = useState([]);
  useEffect(() => {
    getListElements();
  }, []);
  function getListElements() {
    if (token == null) {
      popup("Login or registre");
      navigate("/login");
      return;
    }
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/profile/readlist",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.auth_token,
      },
    };

    axios(config)
      .then(function (response) {
        SetReadList(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="main-list-div">
        <h1>My Read List</h1>
        <div className="list-div">
          {readlist == null ? (
            <h2>Your read list is empty</h2>
          ) : (
            readlist.map((manga) => (
              <ListElement
                key={manga.manga_id}
                element_id={manga.manga_id}
                page={"manga/"}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ReadList;
