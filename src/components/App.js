import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    
     constructor(props){
        super(props);
        this.state={
           input1:"",
           input2:"",
           output:""
        }
        this.setValueHandler1 = this.setValueHandler1.bind(this);
        this.setValueHandler2 = this.setValueHandler2.bind(this);
        this.handle = this.handle.bind(this);
        this.clear = this.handle.bind(this);
     }

     clear(){
          
     }

    

     handle(){
        
         this.val1 = this.state.input1.split('');
         this.val2 = this.state.input2.split('');
         
        
         for(let i=0;i<this.val1.length;i++){
            for(let j=0;j<this.val2.length;j++){
               if(this.val1[i]==this.val2[j]){
                  this.val1[i]='0';
                  this.val2[j]='0';
                  break;
               }
            }
         }

        let count = 0;

        for(let i in this.val1){
            if(i!='0'){
               count++;
            }
        }
        for(let i in this.val2){
         if(i!='0'){
            count++;
         }
     }

     switch(count%6){

     
      case 1:
         this.setState({
            input1:this.state.input1,
            input2:this.state.input2,
            output:"Friends"
         });
      break;
      case 2:
         this.setState({
            input1:this.state.input1,
            input2:this.state.input2,
            output:"Love"
         });
      break;
      case 3:
         this.setState({
            input1:this.state.input1,
            input2:this.state.input2,
            output:"Affection"
         });
      break;
      case 4:
         this.setState({
            input1:this.state.input1,
            input2:this.state.input2,
            output:"Marriage"
         });
      break;
      case 5:
         this.setState({
            input1:this.state.input1,
            input2:this.state.input2,
            output:"Enemy"
         });
      break;
      case 0:
         this.setState({
            input1:this.state.input1,
            input2:this.state.input2,
            output:"Siblings"
         });
      break;

   }

        
        

     }

     setValueHandler1(e){
      
      this.setState({
         input1:e.target.value,
         input2:this.state.input2
      });
           
     }

     setValueHandler2(e){
      this.setState({
         input1:this.state.input1,
         input2:e.target.value
      });
   }

     
    render() {

        return(
            <div id="main">
                 <input type="text" ref="v1" value={this.state.input1} data-testid="input1" onChange={this.setValueHandler1}/> 
                 <input type="text" ref="v2" value={this.state.input2} data-testid="input2" onChange={this.setValueHandler2}/>
                 <button data-testid="calculate_relationship" onClick={this.handle}>Calculate</button>
                 <button data-testid="clear" onClick={this.clear}>Clear</button>
                 <h3 data-testid="answer">{this.state.output}</h3>
            </div>
        )
    }
}


export default App;
