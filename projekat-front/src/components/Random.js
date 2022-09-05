import React from "react";

function Random({ random, generate }) {
  return (
    <div className="random-container">
      <div className="details">
        <img className="random-img" src={random.img} alt="Random"></img>
        <h3 className="title">{random.title} </h3>
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
