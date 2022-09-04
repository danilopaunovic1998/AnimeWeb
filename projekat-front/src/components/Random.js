import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../services/jikenAPI";

function Random({ random, generate }) {
  return (
    <div className="random-container">
      <div className="details">
        <img className="random-img" src={random.img}></img>
        <h3 className="title">{random.title} </h3>
        <p className="synopsis">{random.synopsis}</p>
        <div className="random-button">
          <button
            className="generateRandom"
            onClick={(e) => {
              e.preventDefault();
              generate("/anime");
            }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
}

export default Random;
