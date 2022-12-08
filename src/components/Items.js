import React from 'react'

export default function Items(props) {

   const ItemNames = props.itemsForSale.map((item, index) =>{
    // console.log(index)
        return <ul key={index}>
            <li>
            Item {item.name} 
            </li>
            
            <li>
            Price £{(Math.round(item.price * 100) / 100).toFixed(2)}
            </li>
            
            <li>
            Amount {item.amount}
            </li> 
            <button onClick = {props.addToBasket} value = {index} key={index}>Add Item to basket</button>
            </ul>
    })

  return (
    <div>{ItemNames}</div>
  )
}
