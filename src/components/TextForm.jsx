import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpperCaseCLick = () => {
    let tempText = text.toUpperCase();
    setText(tempText);
  };
  const handleLowerCaseCLick = () => {
    let tempText = text.toLowerCase();
    setText(tempText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCaseCLick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseCLick}>
          LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
