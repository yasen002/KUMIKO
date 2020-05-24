import React, { Component } from 'react'
import data from "./MenueData.json"
export class GroupItem extends Component {
  generateHTML(i){
    var {item, price, disCription} = i;
    return<div key={`${item}`} className="item"> 
<<<<<<< HEAD
              <h4>{item} </h4> 
=======  
              <h1>{item} </h1> 
>>>>>>> 0324c5182551e8c4619f4cb281d68d1d4d4148fa
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
