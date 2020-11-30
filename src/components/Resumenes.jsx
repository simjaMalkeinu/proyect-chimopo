// import React, { useState } from 'react'
// // import { useParams } from 'react-router-dom' 
// 
// 
// 

// export default function Resumen() {
//     // const {_id } = useParams();
//     const [filtro, setFiltro] = useState([]);
//     // console.log(Data, filtro);


//     return (
//         <div className="container">
//             <Buscador setFiltro={setFiltro}/>
//             <Temas temas={Data} />
//         </div>
//     )
// }

import React, { Component } from 'react'
import Data from '../json/resumenes.json'
import Buscador from './Buscador';
import Temas from './Temas';

export default class Resumenes extends Component {

    constructor(){
        super();
        this.state = {
            filtro: '',
            buscador: '',
        }
    }

    onChange = (e) => {
        const { value } = e.target;
        // console.log(value);
        this.setState({buscador: value});
    }

    render() {
        return (
        <div className="container">
            <Buscador handChange={this.onChange} />
            <Temas temas={Data} search={this.state.buscador}/>
        </div>
    )
    }
}
