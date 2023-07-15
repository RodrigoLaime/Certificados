import React from 'react'
import '../components.css';
import image1 from "../../asset/logica/diploma-pensamiento-logico-2020_page-0001.jpg"
import image2 from "../../asset/logica/diploma-pensamiento-logico_page-0001.jpg"
const Logica = () => {
  const imgLogica = [
    image1,
    image2
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