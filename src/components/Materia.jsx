import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Materias extends Component {
  render() {
    const { id, title, active } = this.props;
    return (
      <div className="col-md-4 mx-auto mt-4">
        <div className="card style-card">
          <img src={`./img/${id}.jpg`} alt="" className="img-header" />
          <div className="card-body">
            <div className="card-title">{title}</div>
          </div>
          <div className="card-footer pb-4">
              {active ? (
                // <div className="btn btn-block btn-primary">entrar</div>
                <Link to={`/unidadaprendizage/`} className="btn btn-block btn-primary">ENTRAR</Link>
              ) : (
                <div className="btn btn-block btn-outline-info">
                  Proximamente
                </div>
              )}
            </div>
        </div>
      </div>
    );
  }
}
