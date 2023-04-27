import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(){
    super();
    document.body.style.backgroundColor = localStorage.getItem("M") === "dark"? "#343a40": "white" ;
    this.state={
      mode: localStorage.getItem("M") == null? "light": localStorage.getItem("M"),
      progress : 0
    }
  }

  SetProgress = (ProgressVal) => {
    this.setState({
      progress: ProgressVal
    })
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
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Navbar mode={this.state.mode} toggle={this.ModeChange}/>
          <Routes>
            <Route exact path="/" element={<News progress={this.SetProgress} key={"general"} category="general" country="in" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News progress={this.SetProgress} key={"business"}  category="business" country="in" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News progress={this.SetProgress} key={"entertainment"}  category="entertainment" country="in" mode={this.state.mode} />} />
            <Route exact path="/general" element={<News progress={this.SetProgress} key={"general"}  category="general" country="in" mode={this.state.mode} />} />
            <Route exact path="/health" element={<News progress={this.SetProgress} key={"health"}  category="health" country="in" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News progress={this.SetProgress} key={"science"}  category="science" country="in" mode={this.state.mode} />} />
            <Route exact path="/sports" element={<News progress={this.SetProgress} key={"sports"}  category="sports" country="in" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News progress={this.SetProgress} key={"technology"}  category="technology" country="in" mode={this.state.mode} />} />
          </Routes>
        <Footer mode={this.state.mode}/>
      </Router>
        
     
    )
  }
}
