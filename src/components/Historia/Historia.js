import React, { Component } from 'react';

class Historia extends Component{

    /*
    constructor(){
        super();
        this.state = {
            id,

        };
    }*/

    render(){
        return (
            <div class="historia">
                <h1>
                   {this.props.textoHistoria}
                </h1>
            </div>
        );

    }

}

export { Historia };

/*
class Historia extends Component {
    render() {
      return (
        <div className="recordatorio">
          <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
          <h4>Historial de opciones elegidas: </h4>
          <ul>{this.props.historial}</ul>
        </div>
      );
    }
  }*/