import React, { Component } from "react";

export class SubHeader extends Component {
  render() {
    return (
      <div className="subheader" onClick={this.props.goBackClik}>
        <div className="i fa fa-chevron-left" />
      </div>
    );
  }
}

export default SubHeader;
