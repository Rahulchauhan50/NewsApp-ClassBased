import React, { Component } from 'react'

export class Newsitems extends Component {
  
  render(props) {
    let {title, despription, newurl, imageurl} = this.props
    return (
        <div className="card mx-auto" style={{width: "18rem", height: "100%"}}>
            <img src={imageurl===null?'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg':imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{despription}</p>
                <a href={newurl} target="_blank"className="btn btn-sm btn-primary">read more</a>
            </div>
          </div>
    )
  }
}

export default Newsitems