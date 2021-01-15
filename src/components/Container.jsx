//modulo react
import React, { Component } from "react";
//modulos propios
import Materias from "./Materias";
import Resumenes from "./Resumenes";
import Resumen from "./Resumen";
//importar la informacion de un archivo JSON en cual contiene la informacion de las materias
import MateriasJson from "../json/materias.json";
//importar enrutador de React, junto con los modulos Router, Switch, Route para la navegacion de vistas
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//exportar por defecto al llamar este modulo la clase Container la cual se extiende de la clase Component
export default class Container extends Component {
  //definicion del estado del componente Container
  state = {
    //variables de estado de la clase instanciada
    buscador: "",
    filtros: {},
    contenido: [],
    materias: MateriasJson,
  };

  //metodo render de la clase Container
  render() {
    //retorno del metodo Render
    return (
      <div>
        {/* instanciar el modulo Router */}
        <Router>
          {/* instanciar el modulo Switch */}
          <Switch>
            {/* instanciar el modulo Route */}
            <Route path="/" exact>
              {/* renderizar el componente propio llamado Materias, y le damos como una propiedad nueva las materias */}
              <Materias materias={this.state.materias} />
            </Route>
            <Route path="/unidadaprendizage/resumen/:_id">
              {/* renderizar el componente propio llamado Resumen */}
              <Resumen />
            </Route>
            <Route path="/unidadaprendizage/">
            {/* renderizar el componente propio llamado Resumenes */}
              <Resumenes />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
