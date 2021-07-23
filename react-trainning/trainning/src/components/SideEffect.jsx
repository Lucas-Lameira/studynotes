import React, { Fragment, useState, useEffect } from 'react';
import {Text} from './Text';

export function SideEffect (){
  const [someText, setSomeText] = useState('');

  useEffect(()=>{
    if(someText === ''){
      setSomeText(sessionStorage.getItem('someText') || ''); 
    }else{
      sessionStorage.setItem('someText', someText)
    }

  },[someText]);

  return(
    <Fragment>
      <label htmlFor="textInput">Type something</label>
      <input 
        type="text" 
        id="textInput"
        value={someText}
        onChange={ event => setSomeText(event.target.value)}
      />
      <Text info="text: ">
        {someText}
      </Text>
    </Fragment>
  );
}