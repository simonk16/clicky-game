import React from 'react'


const ImageCard = props => (
    <div className="col-sm">
        <img className="card-img-top" style={style.img} src={props.image} alt={props.name}/>
    </div>
    )
    

const style = {
    img: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "10rem",
        maxHeight: "10rem"
        
    }
}

export default ImageCard