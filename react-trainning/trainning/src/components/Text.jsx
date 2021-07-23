import React from 'react';

export class Text extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <p> {this.props.info} {this.props.children}</p>
  }
}