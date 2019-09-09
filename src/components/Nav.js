import React, { Component } from 'react'



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
export default class Nav extends Component {
    
    state = {
        centerMessage: "Click an image to begin",
        score: 0,
    }
    

    
    
    render() {
        return (
            <nav style={style}>
                <div style={style.leftNavDiv}>Clicky Game</div>
                {this.state.centerMessage}
                <div style={style.scoreDiv}>{this.state.score}</div>
            </nav>

        )
    }
}

