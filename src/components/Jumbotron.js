import React from 'react'

export default function Jumbotron() {
    return (
    <div className="jumbotron jumbotron-fluid" style={style}>
        <div className="container">
            <h1 className="display-4">Clicky Game!</h1>
            <p className="lead">Click on an image to get points, but don't on any image more than once</p>
        </div>
    </div>
    )
}

const style = {
    borderRadius: "25px"
}
