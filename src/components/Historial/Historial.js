import React, { Component } from 'react';

class Historial extends Component{

    render(){
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                   {this.props.historial.map((opcion, index) => {
                       return(
                           <li key={index}> {opcion} </li>
                       );
                   })}
                </ul>
            </div>
        );
    }
}

export { Historial };