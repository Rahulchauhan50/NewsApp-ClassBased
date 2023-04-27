import React, { Component } from 'react'

export class Newsitems extends Component {
  
  render(props) {
    let {mode, title, despription, newurl, imageurl, time, author, source} = this.props
    return (
        <div className={`card mx-auto bg-${mode} text-${mode==="dark"?"light":"dark"}`} style={{width: "20rem", height: "100%"}}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
            <img src={imageurl===null?'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg':imageurl} className="card-img-top" alt="..."/>
            <div className="card-body mb-0">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{despription}</p>
            </div>
            <div className='m-3'>
                <div className='mt-0 mb-2'> 
                <div style={{fontSize:"12px",fontFamily:"sans-serif"}} >{`Author: ${author?author:"Unknown"}`}</div>
                <div style={{fontSize:"12px",fontFamily:"sans-serif"}} >{`Date: ${new Date(time).toGMTString()} `}</div>
                </div>
                <a href={newurl} className={`btn btn-sm ${mode === "dark"?"btn-outline-light":"btn-dark"}`}>read more</a>
            </div>
          </div>
    )
  }
}

export default Newsitems