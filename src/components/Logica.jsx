import React, { useState } from 'react'
import '../components.css';
import image1 from "../../asset/logica/diploma-pensamiento-logico-2020_page-0001.jpg"
import image2 from "../../asset/logica/diploma-pensamiento-logico_page-0001.jpg"
const Logica = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const imgLogica = [
    image1,
    image2
  ]
  const imge = imgLogica;
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

export default Logica