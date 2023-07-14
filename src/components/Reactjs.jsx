import React from 'react'
import '../components.css';
const Reactjs = () => {
  const imgReact = [
    "../asset/React/diploma-react-estado.jpg",
    "../asset/React/diploma-react-hooks.jpg",
    "../asset/React/diploma-react-patrones-render.jpg",
    "../asset/React/diploma-react-practico.jpg",
    "../asset/React/diploma-react-redux-profesional.jpg",
    "../asset/React/diploma-react-router.jpg",
    "../asset/React/diploma-react-state-machines.jpg",
    "../asset/React/diploma-react.jpg"
  ]
  const imge = imgReact;
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

export default Reactjs