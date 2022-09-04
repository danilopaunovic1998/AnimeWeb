import React from "react";

function ListCard({ element, page }) {
  return (
    <div className="list-card">
      <img src={element.images.jpg.image_url}></img>
      <h3 className="title">{element.title}</h3>
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
