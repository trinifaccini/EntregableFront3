import React, { Component } from 'react';
import {Historia} from "../Historia/Historia";
import {Opciones} from '../Opciones/Opciones';
import {Historial} from '../Historial/Historial';
import data from '../data.json'

const historialOpciones = [];

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            opcionAnterior: "",
            actual: data[0],
            textoHistoria: data[0].historia,
        }

        this.cambiarTexto = this.cambiarTexto.bind(this);
    }
    
    cambiarTexto(eleccion){

        if(this.state.contador < 4){

            eleccion = eleccion.toLowerCase();

            let aux = (this.state.contador + 2) + eleccion;
            let opcion = data.find(element => element.id === aux);
        
            this.setState({
                contador: this.state.contador + 1,
                opcionAnterior: eleccion.toUpperCase(),
                actual: opcion,
                textoHistoria: opcion.historia
            });
        }

        else {
            alert("HA TERMINADO LA HISTORIA.\nVUELVA PRONTO PARA SEGUIR CREANDO AVENTURAS :)");
        }
    }

    componentWillMount(){
        alert("ELIGE TU PROPIA AVENTURA \nSelecciona tu opcion preferida para continuar la historia...");
    }

	componentDidUpdate() {
        console.log("Seleccion recien elegida: " + this.state.opcionAnterior);
        historialOpciones.push(this.state.opcionAnterior);
	}

    render(){
        return (
            <div className="layout">
                <Historia textoHistoria={this.state.textoHistoria}/> 
                <Opciones opcionA = {this.state.actual.opciones.a} opcionB={this.state.actual.opciones.b} cambiarTexto={this.cambiarTexto}/>
                <Historial seleccionPrevia={this.state.opcionAnterior} historial={historialOpciones} />
            </div>
        );
    }
}

export {Main}