import React, { Component } from 'react'
import loading from './Loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading' width={"60px"}></img>
      </div>
    )
  }
}
