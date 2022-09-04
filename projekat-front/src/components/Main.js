import React from "react";
import Random from "./Random";
import { useEffect } from "react";
import { useState } from "react";
import api from "../services/jikenAPI";
import MostPopular from "./MostPopular";

function Main({ page }) {
  const [random, SetRandom] = useState("");
  useEffect(() => {
    generate("" + page);
  }, []);
  console.log("ovo je page" + { page });

  const generate = async (param) => {
    var data = await api.GETRandom(param);
    SetRandom({
      id: data.mal_id,
      title: data.title,
      img: data.images.jpg.image_url,
      synopsis: data.synopsis,
    });
  };
  console.log(random);
  return (
    <div className="main-div">
      <Random random={random} generate={generate} />
      <MostPopular page={page} />
    </div>
  );
}

export default Main;
