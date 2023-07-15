import React from 'react'
import '../components.css';
import image1 from "../../asset/terminal/diploma-git-github.jpg";
import image2 from "../../asset/terminal/diploma-npm.jpg"
const Terminal = () => {
  const imgTerminal = [
    image1,
    image2
  ]
  const imge = imgTerminal;
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

export default Terminal