import React, {Fragment} from 'react';
import {Text} from './Text';

export class TextInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {name: undefined, inputValue: ''}
    this.hint = 'What\'s your name';
    this.changeName = this.changeName.bind(this);
  }

  changeName = function (event){
    this.setState({inputValue: event.target.value});
  }
  
  persistName = () => {
    this.setState({name: this.state.inputValue})
  }

  render(){
    const renderInput = () => {
      return(
        <Fragment>
          <label htmlFor="firstName">First Name: </label>
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={this.changeName}
            placeholder={this.hint}
            id="firstName"
          /> 
          <button onClick={this.persistName}>Save</button>      
      </Fragment>
      );
    }

    const renderText = () => {
      return (
        <Text info="Name: ">
          {this.state.name}
        </Text>
      );
    }

    return !this.state.name ? renderInput() : renderText();    
  }
}

