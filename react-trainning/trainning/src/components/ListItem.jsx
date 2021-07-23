import React from 'react';

export class ListItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const textDecoration = this.props.complete ? 'line-through' : 'none';
    return(
      <li item-id={this.props.id} style={{textDecoration}}>{this.props.children}</li>
    );
  }
}