import { useState } from "react";

export default function Form2(props) {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleToUpperCase = () => {
    console.log("Button Clicked");
    setText(text.toUpperCase());
  };

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading1}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="Textbox"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleToUpperCase}>
        To UpperCase
      </button>
    </div>
  );
}
