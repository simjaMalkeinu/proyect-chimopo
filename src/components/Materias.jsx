import React, { Component } from 'react'
import Materia from './Materia';

export default class Materias extends Component {


    render() {

        const { materias } = this.props

        return (
            <div className="row">
                {materias.map((m) => {
                  return (
                    <Materia
                      key={m.id}
                      id={m.id}
                      title={m.title}
                      active={m.active}
                    />
                  );
                })}
              </div>
        )
    }
}
