//modulo compoenete y modulos propios
import React, { Component } from "react";
import Materia from "./Materia";

// exportar por defecto como modulo la clase Materias la cual se extiende de la clase Component
export default class Materias extends Component {
  //metodo render de la clase Materias
  render() {
    //destructirin de la propiedades del compoenete
    const { materias } = this.props;
    //retorno del metodo render
    return (
      <div className="row">
        {materias.map((m) => {
          return (
            <Materia key={m.id} id={m.id} title={m.title} active={m.active} />
          );
        })}
      </div>
    );
  }
}
