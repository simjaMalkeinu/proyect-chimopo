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
      <Link to="/unidadaprendizage/" className="btn btn-info">
        Volver
      </Link>
      {Data.map((item) => {
        if (_id == item._id) {
          return (
            <div className="card" key={item._id}>
              <div className="card-header">{item.title}</div>
              {/* <div className="card-body">{contenido(item.contenido)}</div> */}
              <div className="card-body">
                {contenido(item.contenido) ? (
                  <div>
                    {item.contenido.map((line) => {
                      return <div className="pt-2" key={line}>{line}</div>;
                    })}
                  </div>
                ) : (
                  <div>{item.contenido}</div>
                )}
              </div>
                {
                  item.imagen ? (
                  <div className="card-body"> 
                    <img src={`../../img/${item.imagen}.${item.extencion}`} alt="" className="tema-img mx-auto"/>
                  </div>
                  ) : null
                }
              
              <div className="card-footer">{setUnidad(item.unidad)}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
