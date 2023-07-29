import React, { useState } from 'react'
import '../components.css';

import image1 from "../../asset/React/diploma-react-estado.jpg";
import image2 from "../../asset/React/diploma-react-hooks.jpg";
import image3 from "../../asset/React/diploma-react-patrones-render.jpg";
import image4 from "../../asset/React/diploma-react-practico.jpg";
import image5 from "../../asset/React/diploma-react-redux-profesional.jpg";
import image6 from "../../asset/React/diploma-react-router.jpg";
import image7 from "../../asset/React/diploma-react-state-machines.jpg";
import image8 from "../../asset/React/diploma-react.jpg"

const Reactjs = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const imgReact = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ]
  const imge = imgReact;
  return (
    <div className='container-file'>
      <div className='container-img'>
        {imge.map((ruta, index) => (
          <div className='img-div' key={index} onClick={() => handleImageClick(ruta)}>
            <img className='img' src={ruta} alt={`Imagen`} />
            <a className='buton-img' href={selectedImage} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reactjs