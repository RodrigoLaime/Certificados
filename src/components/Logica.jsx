import React from 'react'
import '../components.css';
const Logica = () => {
  const imgLogica = [
    "../asset/logica/diploma-pensamiento-logico-2020_page-0001.jpg",
    "../asset/logica/diploma-pensamiento-logico_page-0001.jpg"
  ]
  const imge = imgLogica;
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

export default Logica