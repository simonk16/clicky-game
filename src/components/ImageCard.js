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
           
            <div className="card col-sm-4">
                <img style={style.img} src={this.props.image} className="img-container" alt={this.props.name} onClick={this.props.clickEvent}/>
            </div>
           
        )
    }
}


const style = {
    img: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "10rem",
        maxHeight: "10rem"
        
    }
}