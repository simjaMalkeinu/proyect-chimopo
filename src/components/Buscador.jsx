import React, { Component } from 'react'

export default class buscador extends Component {

    render() {
        return (
            <div className="buscador">
                <input type="text" className="input-buscador" placeholder="Buscar" name="buscador" onChange={this.props.handChange} />
            </div>
        )
    }
}
