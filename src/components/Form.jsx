import { useState } from "react";

export default function Form(props) {
  const [text,setText] = useState()

  function handleForm(event){
    setText(event.target.value)
  
  }
  
  function handleClick(){
    setText(text.toUpperCase());
    
  }

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleForm} id="Box1" rows="8"></textarea>
      </div>
      <button type="button" onClick={handleClick} className="btn btn-primary">Convert To Uppercase</button>    
      </>
  );
}
