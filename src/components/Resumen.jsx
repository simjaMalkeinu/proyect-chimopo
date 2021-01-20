import React from "react";
import { Link, useParams } from "react-router-dom";
import Unidades from "../json/unidades.json";
import Data from "../json/resumenes.json";

export default function Resumen() {
  const { _id } = useParams();

  const setUnidad = (unidad) => {
    var unidadR = Unidades.map((u) => {
      if (u._id === unidad) {
        return u.title;
      }
    });

    return unidadR;
  };

  const contenido = (c) => {
    return Array.isArray(c);
  };

  return (
    <div>
      <Link to="/unidadaprendizage/" className="btn btn-block btn-info">
        <h3>Volver</h3>
      </Link>
      {Data.map((item) => {
        if (_id == item._id) {
          return (
            <div className="card resumen" key={item._id}>
              <div className="card-header tema">{item.title}</div>
              {/* <div className="card-body">{contenido(item.contenido)}</div> */}
              <div className="card-body">
                {contenido(item.contenido) ? (
                  <div>
                    {item.contenido.map((line) => {
                      return (
                        <div className="pt-2 contenido" key={line}>
                          {line}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="contenido">{item.contenido}</div>
                )}
              </div>
              {item.imagen ? (
                <div className="card-body">
                  <img
                    src={`../../img/${item.imagen}.${item.extencion}`}
                    alt=""
                    className="tema-img mx-auto"
                  />
                </div>
              ) : null}

              <div className="card-footer unidad2">
                {setUnidad(item.unidad)}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
