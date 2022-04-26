import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase!", "success");
  };
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase!", "success");
  };
  // const handleTitleCaseClick = () => {
  //     setText(newText);
  // }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed from the text!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === `dark` ? `#38372e` : `white`,
              color: props.mode === `dark` ? `white` : `black`
            }}
            onChange={handleOnChange}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>
          Convert to UpperCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>
          Convert to LowerCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleTitleCaseClick}>Convert to Title Case</button> */}
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) => {return element.length!== 0}).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!== 0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview...'}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
