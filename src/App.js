import "./App.css";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar hName= "Textutils"  />
      <div className="container my-3">
        <Form heading = "Enter text to analyse:" />
      </div>
     
    </>
  );
}

export default App;
