import React, { Component } from 'react'
import logo from '../img/chopsticks.svg'

class Header extends Component {
  render() {
    return (
      <header className="app-header">
  <div className="container">
    <img src={logo} alt="header" className="logo" />
    <h1>KUMIKO</h1>
  </div>
</header>
    );
  }
}

export default Header
