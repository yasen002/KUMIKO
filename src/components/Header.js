import React, { Component } from 'react'
import logo from '../img/chopsticks.svg'

<<<<<<< HEAD
class Header extends Component {
  render() {
    return (
      <header className="app-header">
  <div className="container">
    <img src={logo} alt="header" className="logo" />
    <h1>KUMIKO</h1>
  </div>
=======
export class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
          <img src={logo} alt="header" className="logo" />
          <h1 className="restaurantName">KUMIKO</h1>
        </div>
>>>>>>> 0324c5182551e8c4619f4cb281d68d1d4d4148fa
</header>
    );
  }
}

export default Header
