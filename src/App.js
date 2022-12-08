import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Basket from './components/Basket';
import Items from './components/Items';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {

  const[itemsInBasket,SetItemsInBasket] = useState([])
  const[runningTotal,SetRunningTotal] = useState(0)
  const [itemsForSale, SetItemsForSale] = useState([
    {name: "apples",
    price: 0.50,
    amount: 10
  },
  {name: "bananas",
  price: 0.40,
  amount: 3
  },
  {name: "oranges",
  price: 0.30,
  amount: 5
  },
  {name: "Kiwis",
  price: 1,
  amount: 3
  }

  ])
const addToBasket = function(event){
  // console.log(key)
  
  const newItem = [...itemsInBasket,itemsForSale[event.target.value].name]
  const newPrice = runningTotal + itemsForSale[event.target.value].price
  // const newAmount = itemsForSale[event.target.value].amount - 1
  const updatedAmount = itemsForSale.map((newAmount,index)=>{
    console.log(event.target.value)
    console.log(index)
    if (event.target.value == index)  
    return {name:newAmount.name,
        price:newAmount.price,
        amount: newAmount.amount - 1}
    else return {name:newAmount.name,
    price:newAmount.price,
    amount: newAmount.amount}
      }
    


  )
  console.log(updatedAmount)
  SetItemsForSale(updatedAmount)
  console.log(itemsForSale)
  SetRunningTotal(newPrice)
  SetItemsInBasket(newItem)
  // console.log(itemsInBasket)

}


return(
  <Router>
    <NavBar/>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/basket" element = {<Basket itemsInBasket = {itemsInBasket} runningTotal={runningTotal}/>}/>
      <Route path = "/items" element = {<Items itemsForSale = {itemsForSale} addToBasket={addToBasket} />}/>
    </Routes>
  </Router>
)
  
}

export default App;
