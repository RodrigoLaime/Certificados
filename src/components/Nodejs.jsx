// import React from 'react'
// import '../components.css';
// const Nodejs = () => {
//   const imgNode = [
//     "../asset/nodejs/diploma-backend-nodejs-postgres.jpg",
//     "../asset/nodejs/diploma-backend-nodejs.jpg",
//     "../asset/nodejs/diploma-fundamentobd.jpg",
//     "../asset/nodejs/diploma-fundamentos-node.jpg",
//     "../asset/nodejs/diploma-introduccion-backend.jpg",
//     "../asset/nodejs/diploma-nodejs-microservicios.jpg",
//     "../asset/nodejs/diploma-nodejs-mongo-websockets.jpg",
//     "../asset/nodejs/diploma-passport.jpg"
//   ]
//   const imge = imgNode;
//   return (
//     <div className='container-file'>
//       <div className='container-img'>
//         {imge.map((ruta, index) => (
//           <div className='img-div' key={index}>
//             <img className='img' src={ruta} alt={`Imagen`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Nodejs
import React from 'react';
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

  return (
    <div className='container-file'>
      <div className='container-img'>
        {imgNode.map((ruta, index) => (
          <div className='img-div' key={index}>
            <img className='img' src={ruta} alt={`Imagen ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nodejs;