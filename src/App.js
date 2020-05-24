import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainMenue from "./components/MainMenue";
export default class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <MainMenue />
        <Footer />
      </div>
    );
  }
}
