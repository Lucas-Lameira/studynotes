import React from 'react';

class Subtitle extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h2>{this.props.subtitle}</h2>
    );
  }
}

export default Subtitle;