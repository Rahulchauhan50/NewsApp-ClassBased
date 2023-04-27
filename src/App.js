import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer';

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
      <div>
        <Navbar mode={this.state.mode} toggle={this.ModeChange}/>
        <News mode={this.state.mode} />
        <Footer mode={this.state.mode}/>
      </div>
    )
  }
}
