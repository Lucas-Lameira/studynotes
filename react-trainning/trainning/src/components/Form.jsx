import React from 'react';

export class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '', 
      language: 'javascript',
      role: 'student',
      hasEightHours: true,
      bio: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }
  }

  changeName = (event) => {
    this.setState({name: event.target.value});
  }

  changeFavoriteLanguage = (event) => {
    this.setState({language: event.target.value})
  }

  changeRole = (event) => {
    this.setState({role: event.target.value});
  }

  changeCheckBox = (event) => {
    this.setState({hasEightHours: event.target.checked})
  }

  changeBio = (event) => {
    this.setState({bio: event.target.value})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          id="name"
          placeholder="name..."
          value={this.state.name}
          onChange={this.changeName}  
        />

  <br />

        <label htmlFor="favorite-language">Favorite Language</label>
        <select 
          name="favorite-language" 
          id="favorite-language"
          value={this.state.language}
          onChange={this.changeFavoriteLanguage}
        >
          <option value="javascript">Javascript</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="c++">C++</option>
        </select>

        <br />

        <label htmlFor="programmer">Programmer</label>
        <input 
          type="radio" 
          name="role" 
          id="programmer"
          value="programmer"
          checked={this.state.role === 'programmer'}
          onChange={this.changeRole}
          />                

        <label htmlFor="student">Student</label>
        <input
          type="radio" 
          name="role" 
          id="student"
          value="student"
          checked={this.state.role === 'student'}
          onChange={this.changeRole}
        />

<br />

        <label htmlFor="hours">Do you study at least 8 hours per day?</label>
        <input 
          type="checkbox" 
          name="hours" 
          id="hours" 
          checked={this.state.hasEightHours}
          onChange={this.changeCheckBox}
        />

<br />

        <label htmlFor="bio">Bio</label>
        <textarea 
          name="bio" 
          id="bio" 
          cols="30" 
          rows="10"
          value={this.state.bio}
          onChange={this.changeBio}
          style={{resize: 'none'}}
        />        

        <input type="submit" value="Submit" />
      </form>
    );
  }
}