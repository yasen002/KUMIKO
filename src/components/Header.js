import React, { Component } from "react";
import logo from "../img/chopsticks.svg";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        {/* splash */}
        <div id="splash">
          <h1 id="restauranName">KUMIKO</h1>
        </div>
        {/* header */}
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <h1 id="restauranName">KUMIKO</h1>
        </div>
      </header>
    );
  }
}

//timeout function for splash
setTimeout(() => {
  document.getElementById("splash").classList.toggle("fade");
}, 1000);

export default Header;
