//modulos
import React, { Component } from "react";

// Vamos a exportar por defecto la clase NavBar la cual se estiende de la clase Component
export default class NavBar extends Component {
  //metodo render de la clase NavBar
  render() {
    //la clase va a retornar lo siguiente
    return (
      <nav className="navbar navbar-ligth bg-primary">
        <div className="navbar-brand">
        PROYECT CHIMOPO
        {/* <img src="./img/ipn.png" alt="" className="img" />
        <img src="./img/upiicsa.png" alt="" className="img" /> */}
        </div>
      </nav>
    );
  }
}
