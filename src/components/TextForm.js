import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const { t } = useTranslation();

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const eraseAllText = () => {
    let newText = " ";
    setText(newText);
  };

  const capFirst = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    setText(newText);
  };

  const reverseText = () => {
    let newText = " ";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
  };

  const startDictation = () => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.continuous = true; // Continuously listen for speech
      recognition.lang = "en-US"; // Set the language
      recognition.start(); // Start the recognition

      recognition.onresult = (event) => {
        const currentText = event.results[event.resultIndex][0].transcript;
        setText(currentText); // Update state with the recognized text
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <br></br>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-5">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          <button className="btn btn-primary mx-2 " onClick={handleUpperClick}>
            <i className="bi bi-capslock-fill me-2 "></i>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
            <i class="bi bi-arrow-down-circle-fill me-2"></i>
            Conver to Lowercase
          </button>
          <button className="btn btn-danger mx-2 " onClick={eraseAllText}>
            <i class="bi bi-eraser-fill me-2"></i>
            Erase All text
          </button>
          <button className="btn btn-primary mx-2" onClick={capFirst}>
            <i class="bi bi-capslock me-2"></i>
            capsFirstLetter
          </button>
          <button className="btn btn-primary mx2" onClick={reverseText}>
            {" "}
            Reverse Text
          </button>
          <button className="btn btn-success mx-2" onClick={startDictation}>
            <i class="bi bi-mic"></i>
          </button>
        </div>

        <div className="container my-3 d-flex flex-column align-items-center justify-content-center ">
          <h3 className="badge text-bg-secondary bg-dark fs-3 fst-italic">
            Text Summary
          </h3>
          <p>
            {text.split(" ").length} word and {text.length} characters
          </p>

          <p>{0.008 * text.split(" ").length} Minutes Read</p>
          <br></br>
          <h3 className="badge text-bg-secondary bg-dark fs-3 fst-italic">
            Preview
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
