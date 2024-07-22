import { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  function handleForm(event) {
    setText(event.target.value);
  }

  // function handleCapitalClick(){
  //   let split1 = text.split(" ")
  //   // setText();
  //   console.log(split1)
  // }

  function emptyTextBoxAlert(method, message) {
    if (text === "") {
      props.showAlert("please enter text in text box", "warning");
    } else {
      setText(method); // Assuming setText is defined elsewhere to update the text
      props.showAlert(message, "success");
    }
  }

  function handleCapitalClick() {
    let split1 = text.split(" ");
    let capitalized = split1.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    let capitalizedText = capitalized.join(" ");
    emptyTextBoxAlert(
      capitalizedText,
      "Text has been converted to capital case"
    );
  }

  function handleUpperClick() {
    let upperCase = text.toUpperCase();
    emptyTextBoxAlert(upperCase, "Text has been converted to uppercase");
  }
  function handleLowerClick() {
    let lowerCase = text.toLowerCase();
    emptyTextBoxAlert(lowerCase, "Text has been converted to lowercase");
  }
  function handleClearClick() {
    emptyTextBoxAlert("", "Text has been cleared");
  }

  function handleCopyClick() {
    if (text === "") {
      props.showAlert("please enter text in text box", "warning");
    } else {
      var copyText = document.getElementById("Box1");
      // Select the text field
      copyText.select();
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text is copied to clipboard", "success");
    }
  }

  // function handleClearClick(){
  //   setText();
  // }

  return (
    <>
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className={`form-control bg-${
              props.mode === "light" ? "light" : "dark"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            value={text}
            onChange={handleForm}
            id="Box1"
            rows="8"
          ></textarea>
        </div>
        
        <div>
        <button
          type="button"
          onClick={handleUpperClick}
          className="btn btn-primary mx-1"
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          onClick={handleLowerClick}
          className="btn btn-primary "
        >
          Convert To Lower Case
        </button>
        <button
          type="button"
          onClick={handleCapitalClick}
          className="btn btn-primary mx-1 my-1"
        >
          Capital Case
        </button>
        <button
          type="button"
          onClick={handleCopyClick}
          className="btn btn-primary  my-1"
        >
          Copy
        </button>
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-1"
        >
          Clear Text
        </button>

        </div>

        <p>
          {" "}
          Words = {text === "" ? 0 : text.split(" ").length} &nbsp; Characters ={" "}
          {text.length}{" "}
        </p>
        <p>total time to read = {0.008 * text.length} minutes</p>

        <div className="my-3">
          <h2>Preview Text</h2>
          <p>{text === "" ? "Enter text in textbox to preview here" : text}</p>
        </div>
      </div>
    </>
  );
}
