// Display page of products (cats) with images
import React, { useState, useEffect } from 'react'
// Cat images coming from an API (https://thecatapi.com/)

import { AiOutlinePlus } from 'react-icons/ai';


//Import Components
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import './App.css';
import { faker } from '@faker-js/faker'
import Cart from './Components/checkout';
import Slider from './Components/Slider';
import { SliderData } from './Components/SliderData';




function App() {
const [cats, setCats] = useState(['']);
const [basket, setBasket] = useState([]);
const [show, setShow] = useState(false);
const [total, setTotal] = useState([""]);




////////Button for cart function

const fetchCart = () => {
  setShow(true);
}

const handleRemove=(item) => {
  console.log("hello" + item)
  let tempArr = [...basket];
  tempArr.quantity = 1;
  tempArr.splice(item, 1);
  setBasket(tempArr);
}




const addCat = (item) => {
  if(basket.includes(item)){
    let tempBasket = [...basket];
    tempBasket[tempBasket.indexOf(item)].quantity =1;
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
  const updatedTotal = () => {
    let curTot = 0;
    let curQuan = 0; 
      basket.forEach((event) => {
      curTot = curTot + event.price * event.quantity;
      curQuan = curQuan + event.quantity;
    })
    setTotal([curTot.toFixed(0)])
  }
  updatedTotal()
}, [ basket]);



useEffect(() => {
  const fetchImg = async () => {
    let res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=9');
    let data = await res.json();
    console.log(data);
    ourCats(data);
    }
    fetchImg()
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


      <Cart total={total} basket={basket} onClose={() => setShow(false)} fetchCart={fetchCart} show={show} handleRemove={handleRemove} />

          <div className="h2">
            <h2>FurrrSale</h2>
            <p> Bringing cats, to a home near you</p>
          </div>

       

            <div className='SliderContainer'>
              <div className="sliderh4"> 
              <div className="h4cont">
                <h4>Meet Our forever Home's</h4>
                <p>Here at FurrrSale we strive to make <br /> unwanted cats, wanted again. <br /> Do not buy, ADOPT!!!</p>
              </div>
              </div>
            <div className="slider1">
            <Slider slides={SliderData} />
            </div>
            </div>
            <div className="sale">
              <h3>Please give some of our purrfect cats a forever home!</h3>
            </div>
          

      <div className="maincont">    
      <div className="mainContainer">
        
      {
        cats.map((item, index) => {
          return (
          <div className='container'>
                <img key = {item.id} src={item.url} alt="cat Images" />
                <div className="item1">
                  <p><span className='span1'> Breed: </span> {item.breed}</p>
                  <p><span className='span1'> Price: </span> £{item.price}</p>
                  <p><span className='span1'> Number: </span> {item.contact}</p>
                  <p> <span className='span1'>  Email: </span> {item.email}</p>
                <p>{item.title}</p>
                </div>
            <div className="addBtn">
                <button className='button' onClick={() => addCat(item)}> <AiOutlinePlus /> </button>
            </div>
          </div>
          
          )
        })
      }
      </div>
      </div>

      <footer className='footer'>
        <div>
        <h2 className='footerh2'>Thank you for supporting our cats</h2>
        </div>
        <div className="footerlinks">
          <ul>
            <div className="footeritems">
            <li>Careers at FurrrSale</li>
            <li>Contact us</li>
            <li>Donate here </li>
            </div>
            <div className="footeritems">
            <li>Help Cats here</li>
            <li>Cats are awesome</li>
            <li>Click here if you are cool </li>
            </div>
            <div className="footeritems">
            <li>Cats are cute</li>
            <li>Really cute</li>
            <li>And also cool </li>
            </div>
          </ul>
        </div>
      </footer>
    
    </div>
  );
}

export default App;
