import React, { Component } from 'react';
import {Boton} from '../Boton/Boton'

class Opciones extends Component{

    render(){
        return(

            <div className="opciones">
                <Boton opcion={'A'} texto ={this.props.opcionA} cambiarTexto={this.props.cambiarTexto}/>
                <Boton opcion={'B'} texto={this.props.opcionB} cambiarTexto={this.props.cambiarTexto}/>
            </div>
        );
    }
}

export {Opciones}