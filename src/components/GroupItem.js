import React, { Component } from 'react'
import data from "./MenueData.json"
export class GroupItem extends Component {
  generateHTML(i){
    var {item, price, disCription} = i;
    return<div key={`${item}`} className="item"> 
              <h4>{item} </h4> 
              <p>{price}</p>
              <p className="desc">{disCription}</p>
          </div>
  }

  render() {
    //map innner content of group
    var  content = data[`${this.props.groupName}`].detail;
    var innerContent = content.map(this.generateHTML.bind(this));
    return (
      <div className="container grid">
        {innerContent}
      </div>
    )
  }
}

export default GroupItem
