import React, { Component } from 'react'


export default class ImageCard extends Component {    
    
    state = {
        clicked: false
    }

    clickFunc = (e) => {
        e.preventDefault();
        if (this.state.clicked === false ) {
            console.log("clicked is false");
            this.setState({clicked: true})
          } else {
            alert("\u{1F4A2}You already clicked this one!")
          }
        
    }
    
    render() {
        return (
           <div className="row">
            <div className="card col-sm-4">
                <img style={style} src={this.props.image} className="img-container" alt={this.props.name} onClick={this.clickFunc}/>
            </div>
            </div>
        )
    }
}


const style = {
    maxWidth: "18rem",
    maxHeight: "18rem"
}