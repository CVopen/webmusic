import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Index extends Component {
  render() {
    return (
      <div>
        <Link to="home">to home</Link><br/>
      </div>
    )
  }
}
