import React from 'react'

export default function Joke(props){
  return(<div>
    <h2>Question: {props.jo.question}</h2>
    <h2>Answare: {props.jo.answare}</h2>
  </div>)
}




// import React from 'react';


// export default function Joke(props){
//   return(<div>
//     <div id="item">
//       <h3 style={{display: props.question ? "block":"none"}}>Question:  {props.question}</h3>
//       <h3>Answare:  {props.answare}</h3>
//     </div>
//   </div>)
// }