import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
import api from "../services/jikenAPI";

function MostPopular({ page }) {
  const [mostPopular, SetMostPopular] = useState([]);
  useEffect(() => {
    generateTop(page);
  }, []);
  const generateTop = async (param) => {
    var data = await api.GETTop(param);

    SetMostPopular(data.data.slice(0, 7));
  };
  console.log(mostPopular);
  return (
    <div className="popular-container">
      <div className="details">
        <h1>Most Popular</h1>
        {mostPopular.map((element) => (
          <ListCard element={element} key={element.mal_id} page={page} />
        ))}
      </div>
    </div>
  );
}

export default MostPopular;
