import React from "react";
import Random from "./Random";
import { useEffect } from "react";
import { useState } from "react";
import api from "../services/jikenAPI";

function Main() {
  const [random, SetRandom] = useState("");
  useEffect(() => {
    generate("/anime");
  }, []);

  const generate = async (param) => {
    var data = await api.GETRandom(param);
    SetRandom({
      id: data.mal_id,
      title: data.title,
      img: data.images.jpg.image_url,
      synopsis: data.synopsis,
    });
  };
  return (
    <div className="main-div">
      <Random random={random} generate={generate} />
    </div>
  );
}

export default Main;
