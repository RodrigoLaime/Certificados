import React from 'react'
import '../components.css';
import image1 from "../../asset/Javascript/diploma-api-practico.jpg";
import image2 from "../../asset/Javascript/diploma-api-profesional.jpg";
import image3 from "../../asset/Javascript/diploma-api.jpg";
import image4 from "../../asset/Javascript/diploma-arrays.jpg";
import image5 from "../../asset/Javascript/diploma-asincronismo-js.jpg";
import image6 from "../../asset/Javascript/diploma-basico-javascript.jpg";
import image7 from "../../asset/Javascript/diploma-estructuras-datos.jpg";
import image8 from "../../asset/Javascript/diploma-javascript-poo.jpg";
import image9 from "../../asset/Javascript/diploma-javascript-practico.jpg";
import image10 from "../../asset/Javascript/diploma-oop.jpg"

const Javascript = () => {

  const imgJavascript = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
  ]
  const imge = imgJavascript;
  return (
    <div className='container-file'>
      <div className='container-img'>
        {imge.map((ruta, index) => (
          <div className='img-div' key={index}>
            <img className='img' src={ruta} alt={`Imagen`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Javascript