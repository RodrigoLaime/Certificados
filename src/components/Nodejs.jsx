import React from 'react'
import '../components.css';
const Nodejs = () => {
  const imgNode = [
    "../asset/nodejs/diploma-backend-nodejs-postgres.jpg",
    "../asset/nodejs/diploma-backend-nodejs.jpg",
    "../asset/nodejs/diploma-fundamentobd.jpg",
    "../asset/nodejs/diploma-fundamentos-node.jpg",
    "../asset/nodejs/diploma-introduccion-backend.jpg",
    "../asset/nodejs/diploma-nodejs-microservicios.jpg",
    "../asset/nodejs/diploma-nodejs-mongo-websockets.jpg",
    "../asset/nodejs/diploma-passport.jpg"
  ]
  const imge = imgNode;
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

export default Nodejs