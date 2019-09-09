import React, { Component } from 'react'


export default class ImageCard extends Component {    
    
    clickFunc = (e) => {
        e.preventDefault();
        alert('clicked')
    }
    
    render() {
        return (
            <div className="card col-sm-8">
                <img src={this.props.image} className="img-container" alt={this.props.name} onClick={this.clickFunc}/>
            </div>
        )
    }
}


// const style = {
//     width: "18rem",
    
// }