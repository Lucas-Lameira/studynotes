 import React, { Fragment } from 'react';
import { ListItem } from './ListItem';

 export class List extends React.Component{
   constructor(props){
    super(props);
    this.state = {
      item: [
        {id: 1, name: 'item1', complete: false},
        {id: 2, name: 'item2', complete: false},
        {id: 3, name: 'item3', complete: true},
        {id: 4, name: 'item4', complete: false}
      ]
    }
   }

  render(){
    return(
      <Fragment>
        <ul>
          {this.state.item.map(item => (
            <ListItem key={item.id} id={item.id} complete={item.complete}> {item.name} </ListItem>
          ))}
        </ul>
      </Fragment>
    );
  }
 }