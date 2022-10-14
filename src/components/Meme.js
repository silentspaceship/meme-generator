import React, { useState } from "react";

import "./Meme.css";

import memesData from "../memesData";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  // const [allMemeImages, setAllMemeImages] = useState(memesData);

  const memesArray = memesData.data.memes;

  function handleGetMemeImage() {
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  return (
    <main className="content">
      <div className="form">
        <div className="input-container">
          <input type="text" placeholder="top text" />
          <input type="text" placeholder="bottom text" />
        </div>
        <button className="meme-button" onClick={handleGetMemeImage}>
          get a new meme image 🎨
        </button>
        <img
          className="meme-image"
          src={meme.randomImage}
          alt={memesArray.name}
        />
      </div>
    </main>
  );
}
