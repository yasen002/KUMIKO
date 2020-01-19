import React, { Component } from 'react'
import MenueA from './MenueA02'
import GroupItem from './GroupItem'
import GoBack from './GoBack' 
export class MainMenue extends Component {
  constructor(){
    super();
    this.state = {
      item: false,
      main: true,
      back: false, 
      groupName:""
    }
  }

//change item boolion to show items
  groupClick(groupname){
    const {item} = this.state
    this.setState({item: !item, main: item, groupName: groupname});
  }
//go back to main manue
  goBackClik(){
    const {item} = this.state
    this.setState({item: !item, main: item});
  }

//decide what to pass to render
  showDetail(){
    const {item, main, groupName} = this.state;
    if(item){
      return(<React.Fragment>
                <GoBack goBackClik={this.goBackClik.bind(this)} />
                <GroupItem groupName={groupName}/>
            </React.Fragment>)
    }
    if(main){
      return(<MenueA groupClick={this.groupClick.bind(this)} />);
    }
  }


  render() {
    return (
      <div className="content" >
        {this.showDetail()}
      </div>
    )
  }
}

export default MainMenue
