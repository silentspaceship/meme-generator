import React, { useState } from "react";

import "./Meme.css";

import memesData from "../memesData";

export function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const memesArray = memesData.data.memes;

  function handleGetMemeImage() {
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    setMemeImage(memesArray[randomNumber].url);
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
        <img className="meme-image" src={memeImage} alt={memesArray.name} />
      </div>
    </main>
  );
}
