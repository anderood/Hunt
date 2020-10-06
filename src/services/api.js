import axios from 'axios'

export default axios.create({ 
    //é baseURL qualquer coisa fora disso, vai dar erro
    baseURL: `http://192.168.0.10:3001/api`
});