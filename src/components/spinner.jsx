import React, { Component } from 'react'
import loading from './Loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center m-3'>
        <img src={loading} alt='loading' width={"40px"}></img>
      </div>
    )
  }
}
