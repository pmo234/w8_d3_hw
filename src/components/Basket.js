import React from 'react'

export default function Basket(props) {
  return (
    <ul>
    <li>{props.itemsInBasket}</li>
    <li>£{(Math.round(props.runningTotal * 100) / 100).toFixed(2)}</li>
    </ul>
  )
}
