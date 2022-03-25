import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Slider = ( { slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
}


if(!Array.isArray(slides) || slides.length <= 0){
    return null
}

    return ( 
        <div className="slider">
            
           <div className="slidercont1">
            <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide} />
            {SliderData.map(( slide, index) =>{
                return (
                  <div className={index === current ? 'slide active' : 'slide'} key = {index}> 
                  {
                      index === current && (<img src={slide.image} alt="cat images" className='image' />)
                  }

                      

                  </div>  
                )
                
            })}
            </div>
            
        </div>
     );
}
 
export default Slider;
<div className="slider">

</div>