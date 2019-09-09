import React from 'react';

import './App.css';
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron';
import characters from './characters.json'
import ImageCard from './components/ImageCard';
import Wrapper from './components/Wrapper';

class App extends React.Component {
  state = {
    score: 1
  }
  
  
  render() {
    return (
      <Wrapper>
          <Nav score={this.state.score}/>
          <Jumbotron />
          {characters.map( characters => {
            return (<ImageCard id={characters.id} name={characters.name} image={characters.image} clicked={characters.clicked} key={this.id} onClick={this.clickFunc} />)
          })}
      </Wrapper>
    );
  }
  
}

export default App;
