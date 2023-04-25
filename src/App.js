import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      // mode: localStorage.getItem("M") == null? "light": localStorage.getItem("M")
      mode : "dark"
    }
  }
  ModeChange = () => {
    console.log("before click "+this.state.mode);
    if (this.state.mode === "dark") {
      this.state=({
        mode: "light"
      })
      localStorage.setItem("M","light");
      document.body.style.backgroundColor = "white";
      console.log("after click "+this.state.mode)
    }
    else {
      this.state=({
        mode : "dark"
      })
      localStorage.setItem("M","dark");
      document.body.style.backgroundColor = "#343a40";
      console.log("after click "+this.state.mode)
    }
  }
  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} toggle={this.ModeChange}/>
        <News mode={this.state.mode} />
        <Footer mode={this.state.mode}/>
      </div>
    )
  }
}
