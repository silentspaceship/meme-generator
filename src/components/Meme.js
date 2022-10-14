import React, { useState } from "react";

import "./Meme.scss";

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

    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }

  function handleTextChange(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  return (
    <main className="content">
      <div className="form">
        <div className="input-container">
          <input
            type="text"
            placeholder="top text"
            name="topText"
            onChange={handleTextChange}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="bottom text"
            name="bottomText"
            onChange={handleTextChange}
            value={meme.bottomText}
          />
        </div>
        <button className="meme-button" onClick={handleGetMemeImage}>
          get a new meme image 🎨
        </button>
        <div className="meme">
          <img
            className="meme-image"
            src={meme.randomImage}
            alt={memesArray.name}
          />
          {meme.randomImage !== "" && (
            <h2 className="meme-text top">{meme.topText}</h2>
          )}
          {meme.randomImage !== "" && (
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
          )}
        </div>
      </div>
    </main>
  );
}
