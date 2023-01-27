import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpperCaseCLick = () => {
    let tempText = text.toUpperCase();
    setText(tempText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowerCaseCLick = () => {
    let tempText = text.toLowerCase();
    setText(tempText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  // Credits: A
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    // text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "rgb(3 18 33)" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "13466e" : "white",
              color: props.mode === "dark" ? "black" : "rgb(3 18 33)",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpperCaseCLick}
          disabled={text.length === 0}
        >
          UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerCaseCLick}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "rgb(3 18 33)" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => element.length !== 0).length}
          </b>{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
