import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  const [mode,setMode] = useState("light")
  const Toggle=()=>{
    if (mode === "light") {
      document.body.style.backgroundColor = "#202124";
      setMode("dark")      
    }
    else {
      document.body.style.backgroundColor = "white";
      setMode("light")      
    }
  }
  

  return (
    <>
      <NavBar hName= "Textutils" mode={mode} toggle={Toggle}  />
      <div className="container my-3">
        <Form heading = "Enter text to analyse:" mode={mode} />
        {/* <About/> */}
        
      </div>
     
    </>
  );
}

export default App;
