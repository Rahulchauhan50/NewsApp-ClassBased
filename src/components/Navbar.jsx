import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Navbar extends Component {
  
  render() {
    let { mode, toggle } = this.props;
    const styley = {
      position: 'absolute',
      right: "25%",
      top: "15px",
      cursor: "pointer"
    }

    return (
      <>
      <div className='fixed-top'>
        <nav className={`navbar navbar-expand-lg bg-${this.props.mode} navbar-${this.props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">QuickNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Countries
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">business</a></li>
                    <li><a className="dropdown-item" href="/">entertainment</a></li>
                    <li><a className="dropdown-item" href="/">general</a></li>
                    <li><a className="dropdown-item" href="/">health</a></li>
                    <li><a className="dropdown-item" href="/">science</a></li>
                    <li><a className="dropdown-item" href="/">sports</a></li>
                    <li><a className="dropdown-item" href="/">technology</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href='/'>Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div style={styley} className="form-check form-switch">
              <input style={{ cursor: "pointer" }} onClick={toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={mode === "dark" ? true : false} />
              <label id="inp1" className={`text-${mode === "dark" ? "light" : "dark"}`} style={{ fontSize: "13px" }} >Dark Mode</label>
            </div>
          </div>
        </nav>
        <ul className="overflow-auto list-group list-group-horizontal position-relative overflow-auto w-100">
          <li className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/business" >business</Link></li>
          <li className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/entertainment" >entertainment</Link></li>
          <li className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/general" >general</Link></li>
          <li className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/health" >health</Link></li>
          <li className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/science" >science</Link></li>
          <li className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/sports" >sports</Link></li>
          <li className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/technology" >technology</Link></li>
    </ul>  
    </div>
        <div className="container mt-5">
        <div style={{height:"15px"}} className="mt-5"></div>
        <h3 className={`text-${mode==="dark"?"light":"dark"} mt-5`}>Breaking News at Your Fingertips: Download the QuickNews App and Stay Informed Anytime, Anywhere</h3>
        
        </div>
            </>

    )
  }
}

export default Navbar