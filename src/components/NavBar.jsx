import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  
  const [activeLink,setActiveLink] = useState("home");

  const handleActive = (id) => {
    setActiveLink(id);
  };
  
  return (
    <>
      <nav
        className={`navbar  navbar-${props.mode === "light"?"light":"dark"} bg-${props.mode} navbar-expand-lg `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" onClick={()=>handleActive("home")} to="/">
            {props.hName}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === "home"?"active":""}`} onClick={()=>handleActive("home")} id="home" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === "about"?"active":""}`} onClick={()=>handleActive("about")} id= "about" to ="/about">
                  About
                </Link>
              </li>
            </ul>
            <div>
              {/* Theme selector */}
              <div className="btn-group btn-group-toggle mx-4" data-toggle="buttons">
                <label className="btn btn-light">
                  <input onClick= {props.toggle} type="radio" name="options" id="light" autoComplete="off"/> Light
                </label>
                <label className="btn  btn-secondary">
                  <input onClick= {props.toggle} type="radio" name="options" id="dark" autoComplete="off" /> Gray
                </label>
                <label className="btn  btn-primary">
                  <input onClick= {props.toggle} type="radio" name="options" id="primary" autoComplete="off"/> Blue
                </label>
                <label className="btn btn-danger">
                  <input onClick= {props.toggle} type="radio" name="options" id="danger" autoComplete="off"/> Red
                </label>
              </div>
              

            </div>
            <form className="d-flex" role="search">
              <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
                <input
                  onClick= {props.toggle}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
