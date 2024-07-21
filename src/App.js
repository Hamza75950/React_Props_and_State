import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }

  const Toggle=()=>{
    if (mode === "light") {
      document.body.style.backgroundColor = "#202124";
      setMode("dark")
      showAlert("Dark mode activated","success")      
    }
    else {
      document.body.style.backgroundColor = "white";
      setMode("light")
      showAlert("Light mode activated","success")            
    }
  }
  

  return (
    <>
      <NavBar hName= "Textutils" mode={mode} toggle={Toggle}  />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Form heading = "Enter text to analyse:" showAlert={showAlert} mode={mode} />
        {/* <About/> */}
        
      </div>
     
    </>
  );
}

export default App;
