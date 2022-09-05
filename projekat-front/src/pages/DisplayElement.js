import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../services/jikenAPI";
import { useState } from "react";
import axios from "axios";

function DisplayElement() {
  let { id, type } = useParams();
  const [element, SetElement] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    generate(type + "/" + id);
    focus();
  }, []);
  const generate = async (param) => {
    var data = await api.GETById(param);
    SetElement({
      id: data.mal_id,
      title: data.title,
      img: data.images.jpg.image_url,
      synopsis: data.synopsis,
    });
  };
  function focus() {
    ref.current.focus();
  }

  function handleAdd(e) {
    e.preventDefault();
  }
  return (
    <div className="main-div">
      <div className="random-container">
        <div className="details">
          <img className="random-img" src={element.img} alt="Random"></img>
          <h3 className="title" ref={ref} tabIndex={-1}>
            {element.title}
          </h3>
          <p className="synopsis">{element.synopsis}</p>
          <div className="random-button">
            <button className="myButton" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayElement;
