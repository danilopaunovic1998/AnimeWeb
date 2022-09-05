import React from "react";
import { useNavigate } from "react-router-dom";

function ListCard({ element, page }) {
  let navigate = useNavigate();
  function relocate() {
    navigate("/display" + page + "/" + element.mal_id);
  }
  return (
    <div className="list-card">
      <div className="click" onClick={relocate}>
        <img src={element.images.jpg.image_url}></img>
        <h3 className="title">{element.title}</h3>
      </div>
      {page == "/anime" ? (
        <p className="episodes">Number of episodes: {element.episodes}</p>
      ) : (
        <p className="chapters">
          Number of chapters:{" "}
          {element.chapters === null ? "Ongoing" : element.chapters}
        </p>
      )}
    </div>
  );
}

export default ListCard;
