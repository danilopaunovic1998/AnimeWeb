import React from "react";
import api from "../services/jikenAPI";
import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import Popup from "./Popup";

function ListElement({ element_id, page, popup, removeElements, list }) {
  const [element, SetElement] = useState();
  const generateElement = async (param) => {
    var data = await api.GETByIdSmall(param);
    SetElement({
      id: data.mal_id,
      title: data.title,
      img: data.images.jpg.image_url,
      //synopsis: data.synopsis,
    });
    //console.log(element);
  };
  useEffect(() => {
    console.log(element_id);
    generateElement(page + element_id);
  }, []);
  function handleDelete() {
    let type;
    if (page == "anime/") {
      type = "watchlist/";
    } else {
      type = "readlist/";
    }
    var config = {
      method: "delete",
      url: "http://127.0.0.1:8000/api/profile/" + type + element_id,
      headers: {
        Authorization: "Bearer " + window.sessionStorage.auth_token,
      },
    };

    axios(config)
      .then(function (response) {
        popup("Removed");
        removeElements(element_id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="cards">
      <a>
        {element == null ? (
          <></>
        ) : (
          <>
            <figure>
              <img src={element.img}></img>
            </figure>
            <h3 className="title">{element.title}</h3>
            <button onClick={handleDelete}>Remove</button>
          </>
        )}
      </a>
    </div>
  );
}

export default ListElement;
