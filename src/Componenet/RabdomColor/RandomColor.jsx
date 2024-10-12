import { useState } from 'react';
import './RandomColor.css';

function RandomColor() {

    const [color , setColor] = useState('#000000');

    function randomColorUtility(length) {
         return Math.floor(Math.random() * length)
    }
    function hanleCreateHexColor() {
        setColor(null)
        const hexKey = [0 ,1 ,2,3,4,5,6,7,8,9, "A" ,"B" , "C" , "D" , "E" , "F"];
        let hexColor = '#';
        for (let index = 0; index < 6; index++) {
            hexColor += hexKey[randomColorUtility(hexKey.length)]; 
        }
        setColor(hexColor)

    }
     function handleCreateRGBColor(){
        let r = randomColorUtility(256);
        let g = randomColorUtility(256);
        let b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`)
        return `rgb(${r},${g},${b})`;
    }
   
    return(
        <div className="maindiv">
            <div className="colorMaker">
                <h2>Random Color Generator</h2>
                <button className='btn' onClick={() => hanleCreateHexColor()}>
                    HexColor
                </button>
                <button className='btn' onClick={()=> handleCreateRGBColor()}>
                    RGB Color
                </button>
                <div style={{
                        minHeight: "400px",
                        width: "100vh",
                        background: color,
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center"
                    }}>
                    <p style={{
                        fontSize : "50px",
                        color : "white"
                    }}>{color}</p>
                </div>
            </div>
        </div>
    );
}

export default RandomColor;

