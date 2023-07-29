import React, { useState } from 'react';
import image1 from '../../asset/nodejs/diploma-backend-nodejs-postgres.jpg';
import image2 from '../../asset/nodejs/diploma-backend-nodejs.jpg';
import image3 from '../../asset/nodejs/diploma-fundamentobd.jpg';
import image4 from '../../asset/nodejs/diploma-fundamentos-node.jpg';
import image5 from '../../asset/nodejs/diploma-introduccion-backend.jpg';
import image6 from '../../asset/nodejs/diploma-nodejs-microservicios.jpg';
import image7 from '../../asset/nodejs/diploma-nodejs-mongo-websockets.jpg';
import image8 from '../../asset/nodejs/diploma-passport.jpg';

import '../components.css';

const Nodejs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imgNode = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='container-file'>
      <div className='container-img'>
        {imgNode.map((ruta, index) => (
          <div className='img-div' key={index} onClick={() => handleImageClick(ruta)} >
            <img className='img' src={ruta} alt={`Imagen ${index}`} />

            <a className='buton-img' href={selectedImage} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-eye"></i>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Nodejs;