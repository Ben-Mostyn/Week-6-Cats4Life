// Display page of products (cats) with images
import React, { useState, useEffect } from 'react'
// Cat images coming from an API (https://thecatapi.com/)


import './App.css';

function App() {
const [cats, setCats] = useState(['']);


const fetchImg = async () => {
let res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
let data = await res.json();
console.log(data);
setCats(data);
}



useEffect(() => {
  fetchImg();
}, []);

  return (
    <div className="App">

      {
        cats.map((item, index) => {
          return (
          <div className='item'>
            <img key = {index} src={item.url} alt="cat Images" />
            <p>{item.title}</p>
            <p>£{item.price}</p>
            <button> Add to Basket </button>
          </div>
          )
        })
      }

    
    </div>
  );
}

export default App;
