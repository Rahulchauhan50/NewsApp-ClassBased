import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode: localStorage.getItem("M") == null? "dark": localStorage.getItem("M")
    }
  }
  ModeChange = () => {
    console.log("first")
    if (this.state == "dark") {
      this.state=({
        mode: "light"
      })
      localStorage.setItem("M","light");
      document.body.style.backgroundColor = "white";
    }
    else {
      console.log("last")
      this.state=({
        mode : "dark"
      })
      localStorage.setItem("M","dark");
      document.body.style.backgroundColor = "#212529";
    }
  }

  render() {
    return (
      <div>
        <Navbar mode={this.state.mode}/>
        <News mode={this.state.mode} toggle={this.ModeChange}/>
        <Footer mode={this.state.mode}/>
      </div>
    )
  }
}
