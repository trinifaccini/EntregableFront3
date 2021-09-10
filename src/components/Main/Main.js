import React, { Component } from 'react';
import {Historia} from "../Historia/Historia";
import {Opciones} from '../Opciones/Opciones';
import {Historial} from '../Historial/Historial';
import data from '../data.json'
import Swal from 'sweetalert2';

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

        let contador = this.state.contador + 1;

        if(contador < 5){

            eleccion = eleccion.toLowerCase();

            let aux = (contador + 1) + eleccion;
            let opcion = data.find(element => element.id === aux);
        
            this.setState({
                contador: this.state.contador + 1,
                opcionAnterior: eleccion.toUpperCase(),
                actual: opcion,
                textoHistoria: opcion.historia
            });
        }

    
        else {
            this.componentWillUnmount();
        }
    }

    componentWillMount(){
        Swal.fire({
            title:"Bienvenid@ a elige tu propia aventura",
            text: "Haz click para continuar",
        });
    }

	componentDidUpdate() {
        console.log("Seleccion recien elegida: " + this.state.opcionAnterior);
        historialOpciones.push(this.state.opcionAnterior);
	}

    componentWillUnmount(){
        Swal.fire({
            title:"Ha terminado la historia",
            text: "Vuelva pronto para seguir creando aventuras",
        });
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