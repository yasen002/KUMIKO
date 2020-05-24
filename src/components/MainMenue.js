/*
 * Component:  MainMenue.js
 * --------------------
 * component description:
 *this component simplly returns a call to the function showDetail()
 *
 *functions: groupClick,goBackClik,showDetail
 *
 *showDetail():
 *this funtion
 *
 *
 */

//--------import files-------
import React, { Component } from "react";
import Menue from "./Menue";
import GroupItem from "./GroupItem";
// import GoBack from "./GoBack";

export class MainMenue extends Component {
  constructor() {
    super();
    this.state = {
      main: true, //render main manue if this is True
      item: false, //render a spacific item from main manue if this is True
      back: false, //i might remove this later
      groupName: "" //name of the menue group that has been clicked
    };
  }

  //change item boolion to show items
  groupClick(groupname) {
    const { item } = this.state;
    this.setState({ item: !item, main: item, groupName: groupname });
  }
  //go back to main manue
  goBackClik() {
    const { item } = this.state;
    this.setState({ item: !item, main: item, groupName: "" });
  }
  //decide what item to pass to render
  showDetail() {
    const { item, main, groupName } = this.state;
    //render specific item if item is true
    if (item) {
      return (
        <React.Fragment>
          {/* <GoBack goBackClik={this.goBackClik.bind(this)} /> */}
          <GroupItem
            groupName={groupName}
            goBackClik={this.goBackClik.bind(this)}
          />
        </React.Fragment>
      );
    }

    //render the main manue if main is True
    if (main) {
      return <Menue groupClick={this.groupClick.bind(this)} />;
    }
  }

  render() {
    return <div className="content">{this.showDetail()}</div>;
  }
}

export default MainMenue;
