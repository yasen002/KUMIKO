import React, { Component } from 'react'
import data from "./MenueData.json"

export class GroupInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      groupName: "",
      description:"",
      id:null,
      img:this.props.img
    }
  }
   componentDidMount(){
     var {group, description, id} = data[`${this.props.groupItem}`];
     this.setState({
       groupName:group,
       description: description,
       id: id,
       hovered: false
     })
   }
   
   handleHover() {
    this.setState({hovered: !this.state.hovered});
  }

   render() {
    if(this.state.hovered) {
      var hoverClass = "ManueItemHover"
    }

     return (
       <div  
          id={`item${this.state.id}`} 
          className={`item ${hoverClass}`}
          onMouseEnter={this.handleHover.bind(this)}
          onMouseLeave={this.handleHover.bind(this)}
          onClick={this.props.groupClick}
          >  
<<<<<<< HEAD
           <h4>{this.state.groupName}</h4>
=======
           <h1 className="groupName">{this.state.groupName} </h1>
>>>>>>> 0324c5182551e8c4619f4cb281d68d1d4d4148fa
           <p className="desc">{this.state.description}</p>
           <img src={this.state.img} alt="" />
       </div>
     )
   }
}

export default GroupInfo
