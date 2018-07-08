import React, { Component } from 'react';
import LengthCheck from './ValidationComponent';
import CharBlock from './CharComponents';
import './App.css';


class App extends Component {
  state = {
    length : 0,
    inputFieldValue : []
  }


  updateTextLength = (event) =>{
    const valArr = event.target.value.split('');
    this.setState({
      length : event.target.value.length,
      inputFieldValue : [...valArr]
    })
  }

  
  deleteCharacter = (charIndex) => {
    //alert(111);
    const inputCharsArr = [...this.state.inputFieldValue];
    inputCharsArr.splice(charIndex, 1);
   // const inputChars = inputCharsArr.join('');
    this.setState({inputFieldValue : inputCharsArr}) ; 
  //  this.updateTextLength();
  }

  render() {
    let chrVal = null;
    chrVal = (
      this.state.inputFieldValue.map((chr, index)=>{
        return(
        <CharBlock
           chr = {chr}
           key = {index}
           click = {this.deleteCharacter.bind(this,index)}
         /> 
        )
     })
    
    )

    return (
      <div className="App">

        <input type='text' value = {this.state.inputFieldValue.join('')}
          onChange={(event) => this.updateTextLength(event)}
        />
        <p>Input field length = {this.state.length}</p>
        <LengthCheck
          txtLength = {this.state.length} 
        />
        {chrVal}

        
      
        
             
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
