import React from 'react';

import './App.css';
import Jumbotron from './components/Jumbotron';
import characters from './characters.json';
import charactersTwo from './characters2.json'
import ImageCard from './components/ImageCard';
import Wrapper from './components/Wrapper';

class App extends React.Component {
  state = {
    centerMessage: "Hey Man",
    score: 0
  }
  
  scoreFunc = (e) => {
      let newScore = this.state.score +1;
      console.log(newScore)
      this.setState({score: newScore})
    
  }

  render() {
    
    return (
      <Wrapper>
          <div style={style}>
            <div style={style.leftNavDiv}>Clicky Game</div>
              {this.state.centerMessage}
              <div style={style.scoreDiv}>Current Score: {this.state.score}</div>
            </div>
          <Jumbotron />
          
            <div className="row">
            {characters.map( characters => {
              return (<ImageCard key={characters.id} id={characters.id} name={characters.name} image={characters.image} clickEvent={this.scoreFunc}/>)
            })}
            </div>
            <div className="row">
              {charactersTwo.map( characters => {
                return (<ImageCard key={characters.id} id={characters.id} name={characters.name} image={characters.image} clickEvent={this.scoreFunc}/>)
              })}
            </div>
          
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
