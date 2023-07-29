import React, { useState } from 'react'
import '../components.css';
import image1 from "../../asset/terminal/diploma-git-github.jpg";
import image2 from "../../asset/terminal/diploma-npm.jpg"
const Terminal = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const imgTerminal = [
    image1,
    image2
  ]
  const imge = imgTerminal;
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

export default Terminal