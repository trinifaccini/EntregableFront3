import React, { Component } from 'react';

class Boton extends Component{
     
    render(){
        return (
            <div className="opcion">
                
                <button id={this.props.opcion} className="botones" onClick={() => this.props.cambiarTexto(this.props.opcion)}>
                    {this.props.opcion}
                </button>

                <h2>{this.props.texto}</h2>
            </div>
        );
    }

}

export { Boton };
        