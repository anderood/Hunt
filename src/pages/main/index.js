import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {

    //Este componente é montado assim que o componente é mostrado em Tela
    componentDidMount(){
        this.loadProducts();
    }

    // é muito importante que em minhas funções, chame como arrow function, 
    // para manter o this
    loadProducts = async () => {
        const response = await api.get('https://ipapi.co/json');
        console.log(response);
    }

    render(){
        return <h1>Hello De Novo</h1>;
    }
}
