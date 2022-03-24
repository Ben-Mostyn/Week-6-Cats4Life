// Display page of products (cats) with images
import React, { useState, useEffect } from 'react'
// Cat images coming from an API (https://thecatapi.com/)


//Import Components
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import './App.css';
import { faker } from '@faker-js/faker'
import Cart from './Components/checkout';




function App() {
const [cats, setCats] = useState(['']);
const [basket, setBasket] = useState([]);
const [show, setShow] = useState(false);
const [total, setTotal] = useState([""]);


////////Button for cart function

const fetchCart = () => {
  setShow(true);
}


const fetchImg = async () => {
let res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=10');
let data = await res.json();
console.log(data);
ourCats(data);
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
    curQuan = curQuan + event.quantity;
  })
  setTotal([curTot.toFixed(0)])
}



useEffect(() => {
  fetchImg();
}, []);

const ourCats = (data) => {
  let tempCat = [];

  data.forEach((event) => {
    let item = {
      // title: faker.breed.cat(),
      price: faker.datatype.number({
        min: 60,
        max: 150,
      }),
      breed: faker.animal.cat(),
      seller: faker.name.firstName(),
      contact: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    };
    const completeCat = {
      ...item,
      ...event,
      quantity: 1,
    };
    tempCat.push(completeCat)
  });
  setCats(tempCat)
}



  return (
    <div className="App">

      <nav className='navbar'>
        <Navbar fetchCart={fetchCart} onClose={() => setShow(false)} />
      </nav>


      <Cart total={total} basket={basket} onClose={() => setShow(false)} fetchCart={fetchCart} show={show}/>

          <div className="h2">
            <h2>Kitty's for sale here</h2>
          </div>
      <div className="mainContainer">
      {
        cats.map((item, index) => {
          return (
          <div className='container'>
            <img key = {item.id} src={item.url} alt="cat Images" />
            <p>{item.breed}</p>
            <p>£{item.price}</p>
            <p>{item.contact}</p>
            <p>{item.email}</p>
            <p>{item.title}</p>
            <button className='button' onClick={() => addCat(item)}> Add to Basket </button>
            
          </div>
          
          )
        })
      }
      </div>

    
    </div>
  );
}

export default App;
