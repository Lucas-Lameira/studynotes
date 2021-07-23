import React from 'react';
import Subtitle from './components/Subtitle';
import {Text, Title} from './components';
import {TextInput} from './components/TextInput'
import { AgeInput } from './components/AgeInput';
import { LastName } from './components/LastName';
import { List } from './components/List';
import { Form } from './components/Form';
import { SideEffect } from './components/SideEffect';


//rotas 
//providers 
//fluxo auth 
//fluxo autorização 


class App extends React.Component {
  render(){
    return (
      <main>
        <section>
          <Title title="How to be a react dev"/>
          <Subtitle subtitle="Fundamentals"/>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quas exercitationem vitae illo. Quibusdam quam exercitationem, cumque, dolor corporis, itaque blanditiis nulla inventore tempora suscipit quod reprehenderit fugit perferendis labore.
          </Text>
        </section>

        <div>
          <TextInput />
          <LastName />
          <AgeInput />
        </div>

        <hr/>
        <List />

        <hr/>
        <Form />

        <hr/>
        <SideEffect />
      </main>
    );
  }
}


export default App;
