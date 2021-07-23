import React, { Fragment } from 'react';
import {Text} from './Text';

export class LastName extends React.Component {
  constructor(props){
    super(props);
    this.state = {lastname: undefined, lastNameInput: ''}
  }

  changeLastName =(event) => { 
    this.setState({lastNameInput: event.target.value});
  }

  saveLastName = () => {
    this.setState({lastname: this.state.lastNameInput});
  }

  render(){

    const renderForm = () => {
      return(
        <Fragment>
          <br />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text" 
            id="lastName"
            placeholder="last name"
            value={this.state.lastNameInput}
            onChange={this.changeLastName} 
          />
          <button onClick={this.saveLastName}>Save</button>
        </Fragment>
      );
    }

    const renderText = () => {
      return(
        <Text info="Last name: ">
            {this.state.lastname}
        </Text>
      );
    }

    return !this.state.lastname ? renderForm() : renderText();
  }
}