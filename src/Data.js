import React from 'react';
const Data = ( {death,confirmed,recovered,last_update,} ) => (
  <div className="container">
    <h1>Informacion actualizada del COVID19</h1>
    <p>Muertos: {death}</p>
    <p>Positivos: {confirmed}</p>
    <p>Recuperados: {recovered}</p>
    <p>Ultima fecha de actualización: {last_update}</p>
  </div>
)

export default Data;