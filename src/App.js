import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import About from "./components/About"

import {
  BrowserRouter, Route, Routes 
} from "react-router-dom";


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

  const Toggle=(event)=>{
    const id = event.target.id;
    if (id === "light") {
      document.body.style.backgroundColor = "white";
      setMode("light")
      showAlert("Theme is set to Light","success")      
    }
    else if (id === "dark") {
      document.body.style.backgroundColor = "#202124";
      setMode("dark")
      showAlert("Theme is set to Dark ","success")      
    }
    else if (id === "primary") {
      document.body.style.backgroundColor = "#020e30";
      setMode("primary")
      showAlert("Theme is set to Blue","success")      
    }
    else if (id === "danger") {
      document.body.style.backgroundColor = "#420707";
      setMode("danger")
      showAlert("Theme is set to Red","success")      
    }
    
  }
  

  return (
    <>
    <BrowserRouter>

      <NavBar hName= "Textutils" mode={mode} toggle={Toggle}  />
      <Alert alert={alert}/>
      
        
        <Routes>
          <Route exact path = "/" element = {<Form heading = "Enter text to analyse:" showAlert={showAlert} mode={mode} />}></Route>
          <Route exact path = "/about" element = {<About mode={mode}/>}>

          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
