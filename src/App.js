import React, { Component } from "react";
import "./App.css";

class App extends Component {
  /*Define state*/
  state = {
    hours: "00",
    minutes: "00",
    seconds: "00",
    valueButton: "Start",
    count: 0,
  };
  /*Set seconds*/
  setSecond = () => {
    var d = new Date();
    document.getElementById("seconds").innerHTML = d;
    var myVar = setInterval(this.myTimer, 1000);
    return myVar;
  };
  /*Change the button value*/
  changeButton = () => {
    if (this.state.valueButton === "Start") {
      this.setState({
        valueButton: "Pause",
      });
    } else {
      this.setState({
        valueButton: "Start",
      });
    }
  };
 
  setTime = ()=>{
    if (this.state.valueButton === "Start" && (this.state.count>0)) {
    this.state.count = setInterval(() => this.setState({
      time: this.state.count + 1
    }), 1000)
  }
  }
  stopTimer() {
    clearInterval(this.state.count)
  }
 
  render() {
    return (
      <div className="container">
        <span className="hours">{this.state.hours} : </span>
        <span className="minutes">{this.state.minutes} : </span>
        <span className="seconds">{this.state.seconds} </span>
        <br></br>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.changeButton}
        >
          {this.state.valueButton}
        </button>
        <button type="button" className="btn btn-primary" onClick={this.componentWillUnmount}>
          Reset
        </button>
        {this.state.buttonValue==="Start"?(
          <div>
            {this.setTime}
          </div>
        ): <div>{this.stopTimer}</div> }
      </div>
    );
  }
}

export default App;
