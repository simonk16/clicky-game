import React, {Component} from 'react';

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
    if (Component.clickFunc) {
      let newScore = this.state.score +1;
      console.log(newScore)
      this.setState({score: newScore})
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
            {characters.map( characters => {
              return (<ImageCard key={characters.id} id={characters.id} name={characters.name} image={characters.image} clickEvent={this.scoreFunc} />)
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
