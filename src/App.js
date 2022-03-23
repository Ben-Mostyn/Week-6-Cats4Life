// Display page of products (cats) with images
import React, { useState, useEffect } from 'react'
// Cat images coming from an API (https://thecatapi.com/)


//Import Components
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import './App.css';




function App() {
const [cats, setCats] = useState(['']);
const [basket, setBasket] = useState([])


const fetchImg = async () => {
let res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=10');
let data = await res.json();
console.log(data);
setCats(data);
}

const addCat = (item) => {
  if(basket.includes(item)){
    let tempBasket = [...basket];
    tempBasket[tempBasket.indexOf(item)].quantity +=1;
    setBasket(tempBasket) 
    console.log(basket)
    
  } else {
    let tempBasket = [...basket]
    tempBasket.push(item)
    setBasket(tempBasket)
    console.log(basket)
  }
  
};

useEffect(() => {
  updatedTotal();
}, [, basket])

const updatedTotal = () => {
  let curTot = 0;
  let curQuan = 0; 
    basket.forEach((event) => {
    curTot = curTot + event.price * event.quantity;
    curQuan = curQuan + event.quantity
  })
}



useEffect(() => {
  fetchImg();
}, []);

  return (
    <div className="App">

      <nav className='navbar'>
        <Navbar />
      </nav>

      {
        cats.map((item, index) => {
          return (
          <div className='item'>
            <img key = {item.id} src={item.url} alt="cat Images" />
            <p>{item.title}</p>
            <p>£{item.price}</p>
            <button className='button' onClick={() => addCat(item)}> Add to Basket </button>
          </div>
          )
        })
      }

    
    </div>
  );
}

export default App;
