import React from 'react'
import '../components.css';
const Terminal = () => {
  const imgTerminal = [
    "../asset/terminal/diploma-git-github.jpg",
    "../asset/terminal/diploma-npm.jpg"
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