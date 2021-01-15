//importacion de modulos base
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//importando hoja de estilos para la vista usuario
import './css/style.css'

//metodo render de la clase ReactDom
ReactDOM.render(
  //instanciamiento de la clase React en un modo estricto
  <React.StrictMode>
    {/* Renderizar el componente llamado App */}
    <App />
  </React.StrictMode>,
  //utilizando javaScript renderizar la clase instanciada React en el div con id 'root'
  document.getElementById('root')
);
