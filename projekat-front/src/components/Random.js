import React from "react";
import { useNavigate } from "react-router-dom";
function Random({ random, generate, page }) {
  let navigate = useNavigate();
  function relocate() {
    navigate("/display" + page + "/" + random.id);
  }
  return (
    <div className="random-container">
      <div className="details">
        <div className="click" onClick={relocate}>
          <img className="random-img" src={random.img} alt="Random"></img>
          <h3 className="title">{random.title} </h3>
        </div>
        <p className="synopsis">{random.synopsis}</p>
        <div className="random-button">
          <button
            className="myButton"
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
