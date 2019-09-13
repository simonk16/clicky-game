import React from 'react';

import './App.css';
import Jumbotron from './components/Jumbotron';
import characters from './characters.json';

import ImageCard from './components/ImageCard';
import Wrapper from './components/Wrapper';

class App extends React.Component {
  state = {
    characters: characters,
    centerMessage: "Hey Man",
    score: 0
  }

  shuffle = array => {
    console.log(array.length)
    for (let i = 0; i < array.length; i++){
      const rand = Math.floor(Math.random() * array.length)
      let valOne = array[i];
      let valTwo = array[rand];
      array[i] = valTwo;
      array[rand] = valOne
    }
    return array
  }
  
  gameOver = () => {
    let newArr = this.state.characters.map(character => {
       character.clickCount = false;
       return character
    })
    let shuffledArr = this.shuffle(newArr)
    this.setState({characters: shuffledArr, score: 0});
    
  }

  scoreFunc = (e) => {
    if (this.state.clickCount === true) {
      alert("\u{1F4A2}You Already Clicked this one...\n\u{1F4A2}Game Over");
      this.gameOver();
    } else {
      let newScore = this.state.score +1;
      console.log(newScore)
      this.setState({score: newScore, clickCount: true});
      let shuffledArr = this.shuffle(this.state.characters)
      this.setState({characters: shuffledArr})
      
    }
    
      
    
  }

  

  render() {
    
    return (
      <Wrapper>
          <div className="container">
            <div className="row">
              <div className="col-sm">Clicky Game</div>
              <div className="col-sm">{this.state.centerMessage}</div>
              <div className="col-sm">Current Score:{this.state.score}</div>
            </div>
          </div>
            
            
          <Jumbotron />
          
            <div className="row">
            {this.state.characters.map( characters => {
              return (<ImageCard key={characters.id} id={characters.id} name={characters.name} image={characters.image} clickEvent={this.scoreFunc} />)
            })}
            </div>
            
          
      </Wrapper>
    );
  }
  
}

// const style = {
//   postion: "sticky",
//   top: 0,
//   backgroundColor: "black",
//   color: "white",
//   textAlign: "center",
//   display: "flex",
//   height: "75px",
//   borderRadius: "25px",
//   scoreDiv: {
//       float: "right",
//       marginRight: "3rem",
//       marginTop: "23px"
//   },
//   leftNavDiv: {
//       float: "left",
//       marginLeft: "3rem",
//       marginTop: "23px"
//   },
  
// }

export default App;
