import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    document.body.style.backgroundColor = localStorage.getItem("M") === "dark"? "#343a40": "white" ;
    this.state={
      mode: localStorage.getItem("M") == null? "light": localStorage.getItem("M")
    }
  }
  ModeChange = () => {
    console.log("before click "+this.state.mode);
    if (this.state.mode === "dark") {
      this.setState({
        mode: "light"
      })
      localStorage.setItem("M","light");
      document.body.style.backgroundColor = "white";
      console.log("after click "+this.state.mode)
    }
    else {
      this.setState({
        mode : "dark"
      })
      localStorage.setItem("M","dark");
      console.log("first");
      document.body.style.backgroundColor = "#343a40";
      console.log("after click "+this.state.mode)
    }
  }

  render() {
    return (
      <Router>
        <Navbar mode={this.state.mode} toggle={this.ModeChange}/>
          <Routes>
            <Route exact path="/" element={<News key={"general"} category="general" country="in" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News key={"business"}  category="business" country="in" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News key={"entertainment"}  category="entertainment" country="in" mode={this.state.mode} />} />
            <Route exact path="/general" element={<News key={"general"}  category="general" country="in" mode={this.state.mode} />} />
            <Route exact path="/health" element={<News key={"health"}  category="health" country="in" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News key={"science"}  category="science" country="in" mode={this.state.mode} />} />
            <Route exact path="/sports" element={<News key={"sports"}  category="sports" country="in" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News key={"technology"}  category="technology" country="in" mode={this.state.mode} />} />
          </Routes>
        <Footer mode={this.state.mode}/>
      </Router>
        
     
    )
  }
}
