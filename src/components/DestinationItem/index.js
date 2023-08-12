// Write your code here
import {Component} from 'react'
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="container">
      <img src={imgUrl} alt="place" className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
