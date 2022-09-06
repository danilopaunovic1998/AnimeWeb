import React from "react";
import api from "../services/jikenAPI";
import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";

function ListElement({ element_id, page }) {
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

  return (
    <div>
      <div className="cards">
        {element == null ? (
          <></>
        ) : (
          <>
            <img src={element.img}></img>
            <h3>{element.title}</h3>
            <button>Remove</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ListElement;
