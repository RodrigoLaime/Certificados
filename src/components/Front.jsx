import React from 'react';
import '../components.css';

import image1 from "../../asset/Front/diploma-dom.jpg";
import image2 from "../../asset/Front/diploma-flexbox-css-grid.jpg";
import image3 from "../../asset/Front/diploma-html-css.jpg";
import image4 from "../../asset/Front/diploma-html-practico.jpg";
import image5 from "../../asset/Front/diploma-mobile-first.jpg";
import image6 from "../../asset/Front/diploma-web-components-javascript.jpg"

const Front = () => {
  const imgFront = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
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