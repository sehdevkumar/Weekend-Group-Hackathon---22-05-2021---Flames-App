import React, {Component, useState} from "react";
import '../styles/App.css';

const App =()=> {
  var arr  = ["Siblings","Friends","Love","Affection","Marriage","Enemy","Please Enter valid input" ];
  const [getrel ,setRel ] = useState();
  
  const calRelation = () => {
    let input1 = document.querySelector('#inputfirst').value;
  let input2 = document.querySelector('#inputlast').value;
    if (input1 === "" || input2 === "") {
      setRel(6);
    } else {    
     input1 = input1.toLowerCase();
     input2 = input2.toLowerCase();
      function match(input1, input2) {
        let count = 0;
        for (let i in input1){
          if(input2.includes(input1[i])){
          ++count;
          }
        }
        return count;
      }
      const comm = match(input1,input2);
      let l1 = Number(input1.length);
      let l2 = Number(input2.length);
      let len = Number(comm);
       let n  = l1+l2-len*2;
       setRel(n%6);
    }
  }
  const clearRelation = () => {
     document.querySelector('#inputfirst').value="";
     document.querySelector('#inputlast').value="";
     setRel("");

  }
  return (
    <div id="main">
      <label>First Name</label><input type="text" data-testid="input1" id="inputfirst"></input> <br></br>
      <label>Last Name</label><input type="text" data-testid="input2" id="inputlast"></input><br></br>
      <button data-testid="calculate_relationship" onClick={calRelation} >Calculate Relationship Future</button>
      <button data-testid="clear" onClick={clearRelation}>Clear inputs and relationship status</button>
      <h3 data-testid="answer" id="relation">{arr[getrel]}</h3>
    </div>
  )
}


export default App;
