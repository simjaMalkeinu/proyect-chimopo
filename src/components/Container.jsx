import React, { Component } from "react";
import Materias from "./Materias";
import MateriasJson from '../json/materias.json'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resumenes from "./Resumenes";
import Resumen from "./Resumen";

export default class Container extends Component {
  state = {
    buscador: "",
    filtros: {},
    contenido: [],
    materias: MateriasJson
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Materias materias={this.state.materias} />
            </Route>
            <Route path='/unidadaprendizage/resumen/:_id' >
              <Resumen />
            </Route>
            <Route path='/unidadaprendizage/' >
              <Resumenes />
            </Route>
            
          </Switch>
        </Router>
      </div>
    );
  }
}
