import React, { Component } from "react";
import Data from "../json/resumenes.json"; // datos del JSON
import Buscador from "./Buscador";
import Temas from "./Temas";

export default class Resumenes extends Component {
  constructor() {
    super();
    this.state = {
      filtro: "",
      buscador: "",
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    //console.log(e.target.value);
    this.setState({ buscador: value });
  };

  render() {
    return (
      <div className="container">
        <Buscador handChange={this.onChange} />
        <Temas temas={Data} search={this.state.buscador} />
      </div>
    );
  }
}
