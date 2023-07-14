import React from 'react'
import '../components.css';
const Javascript = () => {
  const imgJavascript = [
    "../asset/Javascript/diploma-api-practico.jpg",
    "../asset/Javascript/diploma-api-profesional.jpg",
    "../asset/Javascript/diploma-api.jpg",
    "../asset/Javascript/diploma-arrays.jpg",
    "../asset/Javascript/diploma-asincronismo-js.jpg",
    "../asset/Javascript/diploma-basico-javascript.jpg",
    "../asset/Javascript/diploma-estructuras-datos.jpg",
    "../asset/Javascript/diploma-javascript-poo.jpg",
    "../asset/Javascript/diploma-javascript-practico.jpg",
    "../asset/Javascript/diploma-oop.jpg"
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