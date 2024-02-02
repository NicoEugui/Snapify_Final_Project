import React from 'react';
import { testData3 } from './testData';

export const Welcome = () => {
  return (
    <div className='container-fluid m-5 color-grad3 rounded-3'>
    <div className="container d-flex-column text-center">
      <div className=" color-text">
        <h1 style={{ fontSize: "40px" }}>Bienvenido!</h1>
        <h3 className="p-5 color-text">Ingresa para explorar y compartir tus momentos fotográficos</h3>
      </div>
      <img src={testData3[13].fotoUrl} className="card-img-top ghost" style={{ height: "auto", width: "300px", objectFit: "cover" }} alt="..." />
    </div>
    </div>
  );
};
