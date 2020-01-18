import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className="appfooter">
  <ul>
    <li>
      <i className="fa fa-home" />
      home
    </li>
    <li>
      <i className="fa fa-user" />
      Account
    </li>
    <li>
      <i className="fa fa-photo" />
      photo gallery
    </li>
  </ul>
</footer>
);
  }
}

export default Footer
