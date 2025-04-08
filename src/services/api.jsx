// Importando o Axios, uma biblioteca popular para realizar requisições HTTP
import axios from "axios";

// Criando uma instância do Axios com configurações personalizadas
const api = axios.create(
    {
        // Definindo a URL base para as requisições feitas com esta instância
        baseURL: 'https://fakestoreapi.com/products' // Endereço da API de produtos de exemplo
    }
);

// Exportando a instância configurada para ser usada em outros arquivos
export default api;
