import React, { Component } from 'react'
import Newsitems from '../Newsitems'

export class News extends Component {
  render() {
    return (
      <>
      <div className='container'>
        <div className='row'>
            <div className='my-3 col-md-4'>
                <Newsitems/>
            </div>
            <div className='my-3 col-md-4'>
                <Newsitems/>
            </div>
            <div className='my-3 col-md-4'>
                <Newsitems/>
            </div>
        </div>

        <div className='row'>
            <div className='my-3 col-md-4'>
                <Newsitems/>
            </div>
            <div className='my-3 col-md-4'>
                <Newsitems/>
            </div>
            <div className='my-3 col-md-4'>
                <Newsitems/>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default News