import React, {Fragment} from 'react';
import {Text} from './Text';

export class AgeInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {age: undefined, ageInput: ''}
  }

  updateAge = (event) => {
    this.setState({ageInput: event.target.value})
  }

  persistAge = () => {
    this.setState({age: this.state.ageInput})
  }

  render(){
    const renderAgeInput = () => {
      return (
        <Fragment>
          <br />
          <label htmlFor="age">Age: </label>
          <input 
            type="number" 
            id="age"
            value={this.state.ageInput}
            onChange={this.updateAge}
            min="1"
            max="120"
          />
          <button onClick={this.persistAge}>Save</button>
        </Fragment>
      );
    }

    const renderText = () => {
      return (
        <Text info="Age: ">
          {this.state.age}
        </Text>
      );
    }

    return !this.state.age ? renderAgeInput() : renderText();
  }

}