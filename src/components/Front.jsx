import React from 'react';
import '../components.css';

const Front = () => {
  const imgFront = [
    "../asset/Front/diploma-dom.jpg",
    "../asset/Front/diploma-flexbox-css-grid.jpg",
    "../asset/Front/diploma-html-css.jpg",
    "../asset/Front/diploma-html-practico.jpg",
    "../asset/Front/diploma-mobile-first.jpg",
    "../asset/Front/diploma-web-components-javascript.jpg"
  ];
  const imge = imgFront;
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

export default Front;