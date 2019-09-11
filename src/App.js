import React from 'react';

import './App.css';
import Jumbotron from './components/Jumbotron';
import characters from './characters.json'
import ImageCard from './components/ImageCard';
import Wrapper from './components/Wrapper';

class App extends React.Component {
  state = {
    centerMessage: "Hey Man",
    score: 1
  }
  
  render() {
    
    return (
      <Wrapper>
          <nav style={style}>
            <div style={style.leftNavDiv}>Clicky Game</div>
              {this.state.centerMessage}
              <div style={style.scoreDiv}>{this.state.score}</div>
            </nav>
          <Jumbotron />
          {characters.map( characters => {
            return (<ImageCard key={characters.id} id={characters.id} name={characters.name} image={characters.image} />)
          })}
      </Wrapper>
    );
  }
  
}

const style = {
  postion: "sticky",
  top: 0,
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  display: "block",
  height: "75px",

  scoreDiv: {
      float: "right"
  },
  leftNavDiv: {
      float: "left"
  }
}

export default App;
