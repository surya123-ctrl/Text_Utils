import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter text here");
  const handleUpperCaseCLick = () => {
    let tempText = text.toUpperCase();
    setText(tempText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
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
      <button className="btn btn-primary" onClick={handleUpperCaseCLick}>
        UpperCase
      </button>
    </>
  );
};

export default TextForm;
