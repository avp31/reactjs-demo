import React, { useState } from "react";

const TextForm = (props) => {
  const [textVal, setText] = useState('');
  let modeStyle = {
    backgroundColor: props.themeColor.backgroundColor,
    color: props.themeColor.color,
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (textVal.length > 0) {
      let conVal = textVal.toUpperCase();
      setText(conVal);
      props.showAlert("success", "Uppercase Done")
      console.log("textbox value", textVal);
    }
  };
  const countWordsWithoutSpaces = (textVal) => {
    // Split the text by spaces
    let words = textVal.split(/\s+/);
    // Count non-empty words
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) {
        count++;
      }
    }
    return count;
  };

  const countCharactersWithoutSpaces = (textVal) => {
    // Remove spaces from the text
    let stringWithoutSpaces = textVal.replace(/\s/g, "");
    // Count the characters
    let count = stringWithoutSpaces.length;
    return count;
  };

  const handleChange = (event) => {
    //console.log("text val are", event.target.value);
    setText(event.target.value);
  };

  const handleExtraSpaces = (event) => {
    event.preventDefault();
    if (textVal.length > 0) {
    let newText = textVal.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra spaces removed")
    }
  };

  return (
    <div
      className="container w-50 mt-5 p-2 my-2 border mx-auto"
      style={{ color: props.themeColor.color }}
    >
      <div className="container">
        <div className="m-3 text-left">
          <h5>Word Counter, Converter, Extra Spaces Remover</h5>

          <textarea
            className="form-control"
            style={modeStyle}
            id="mybox"
            rows="8"
            value={textVal}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          //disabled={textVal.length === 0}
          id="myButton"
          className="btn btn-primary mx-2 my-1"
          onClick={handleClick}
          style={{ backgroundColor: props.selectedColor }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Convert To Uppercase
        </button>
        <button
          //disabled={textVal.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
          style={{ backgroundColor: props.selectedColor }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container mt-3">
        <h5>Your Text Summary</h5>
        <p>
          {countWordsWithoutSpaces(textVal)} Words and{" "}
          {countCharactersWithoutSpaces(textVal)} Charecters
        </p>
      </div>
    </div>
  );
};

export default TextForm;
