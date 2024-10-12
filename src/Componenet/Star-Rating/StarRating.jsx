import { useState } from 'react';
import {FaStar}  from 'react-icons/fa'

function StarRating({noOfstars = 5}) {

    const [starClick , setStarClick] = useState(null);
    const [starHover , setStarHover] = useState(null)

    function handleClick(currentIndex) {
        if(starClick === null)
            setStarClick(currentIndex)
    }
    function handleMouseEnter(currentIndex) {
        if(starClick === null)
            setStarHover(currentIndex);
    }
    function handleMouseLive() {
        if(starClick === null)
            setStarHover(null);
    }
    
    return(
        <>
        <h1>Start Rating Demo</h1>
        {[...Array(noOfstars)].map((_ , i) =>{
            i+=1;
            return(
                <FaStar 
                className=''
                    key={i}
                    color= {i <= starHover ? "green" : "black"}
                    onMouseMove={()=> handleMouseEnter(i) }
                    onMouseLeave={()=> handleMouseLive()}
                    onClick={()=> handleClick(i)}
                    size={100}
                />
            )}
        )}
         <h1>Start Value is : {starClick !== null ? starClick : 0}</h1>
       
        </>  
    )    
}

export default StarRating;