/*
 * Component:  GroupItem.js
 * --------------------
 *
 *generateHTML():
 *this function takes one patameter 'i' and returns item details. 'i' is a single item from a manue item group.
 *
 *
 *
 */

import React, { Component } from "react";
import data from "./MenueData.json";
export class GroupItem extends Component {
  generateHTML(i) {
    var { item, price, disCription } = i;
    return (
      <div key={`${item}`} className="item">
        <h4>{item} </h4>
        <p>{price}</p>
        <p className="desc">{disCription}</p>
      </div>
    );
  }

  render() {
    //pass all the items in the item group to generateHTML() and return that html
    var content = data[`${this.props.groupName}`].detail;
    var innerContent = content.map(this.generateHTML.bind(this));
    return (
      <div className="container grid">
        <div
          className="fa fa-chevron-left fa-lg goback"
          onClick={this.props.goBackClik}
        />
        {innerContent}
      </div>
    );
  }
}

export default GroupItem;
