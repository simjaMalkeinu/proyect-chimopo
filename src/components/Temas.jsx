import React, { Component } from "react";
import { Link } from "react-router-dom";

import Unidades from "../json/unidades.json";

export default class Temas extends Component {
  setUnidad(unidad) {
    var unidadR = Unidades.map((u) => {
      if (u._id === unidad) {
        return u.title;
      }
    });

    return <div>{unidadR}</div>;
  }

  render() {
    const { search, temas } = this.props;

    var mayusculas = search.toUpperCase();
    var minusculas = search.toLowerCase();

    var expression = new RegExp(search);
    var expMayus = new RegExp(mayusculas);
    var expMinus = new RegExp(minusculas);

    var longitud = 0;
    return (
      <div className="temas">
        {search === ""
          ? temas.map((item) => {
              return (
                <div key={item._id} className="card style-card">
                  <div className="cabecera">
                    {/* <img src={`../img/U${item.unidad}.png`} alt="" className="img-tema" />
                    <img src={`../img/U${item.unidad}.jpg`} alt="" className="img-tema" /> */}
                    {item.unidad === 1 ||
                    item.unidad === 2 ||
                    item.unidad === 3 ? (
                      <img
                        src={`../img/U${item.unidad}.png`}
                        alt=""
                        className="img-tema"
                      />
                    ) : (
                      <img
                        src={`../img/U${item.unidad}.jpg`}
                        alt=""
                        className="img-tema"
                      />
                    )}

                    <div className="card-body">
                      <div className="title">{item.title}</div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="unidad">{this.setUnidad(item.unidad)}</div>
                  </div>
                  <div className="card-footer">
                    <Link
                      to={`resumen/${item._id}`}
                      className="btn btn-block btn-primary"
                    >
                      Ver resumen
                    </Link>
                  </div>
                </div>
              );
            })
          : temas.map((item) =>
              item.title.match(expression) ||
              item.title.match(expMayus) ||
              item.title.match(expMinus) ? (
                <div key={item._id} className="card style-card">
                  <div className="cabecera">
                    {/* <img src="../img/temas.jpg" alt="" className="img-tema" /> */}

                    {item.unidad === 1 ||
                    item.unidad === 2 ||
                    item.unidad === 3 ? (
                      <img
                        src={`../img/U${item.unidad}.png`}
                        alt=""
                        className="img-tema"
                      />
                    ) : (
                      <img
                        src={`../img/U${item.unidad}.jpg`}
                        alt=""
                        className="img-tema"
                      />
                    )}

                    <div className="card-body">
                      <div className="title">{item.title}</div>
                      <div className="unidad">
                        {this.setUnidad(item.unidad)}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link
                      to={`resumen/${item._id}`}
                      className="btn btn-block btn-primary"
                    >
                      Ver resumen
                    </Link>
                  </div>
                </div>
              ) : null
            )}
        ,
        {temas.map((item) => {
          if (
            item.title.match(expression) ||
            item.title.match(expMayus) ||
            item.title.match(expMinus)
          ) {
            longitud = longitud + 1;
          }
        })}
        ,
        {longitud === 0 ? (
          <div className="alert alert-danger coincidencias" role="alert">
            <h1>No hay coincidencias...</h1>
          </div>
        ) : null}
      </div>
    );
  }
}
