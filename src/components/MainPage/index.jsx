// Importando dependências necessárias
import React, { useState, useEffect } from "react"; // useState e useEffect são hooks do React
import api from '../../services/api'; // Importando o serviço da API para realizar requisições
import './main.css'; // Importando o arquivo de estilo CSS para a página

// Definindo o componente funcional MainPage
export default function MainPage() {
    // Declarando o estado 'produtos' para armazenar os dados dos produtos
    const [produtos, setProdutos] = useState([]);

    // Usando o hook useEffect para realizar uma chamada à API assim que o componente for montado
    useEffect(() => {
        // Função assíncrona para carregar os produtos da API
        async function carregarProdutos() {
          try {
            // Realiza a requisição GET para a API e aguarda a resposta
            const response = await api.get('https://fakestoreapi.com/products');
            
            // Atualiza o estado 'produtos' com os dados retornados da API
            setProdutos(response.data);
          } catch (error) {
            // Em caso de erro, exibe uma mensagem no console
            console.error(  error);
          }
        }
      
        // Chama a função para carregar os produtos assim que o componente for montado
        carregarProdutos();
    }, []); // O array vazio [] garante que o useEffect seja chamado apenas uma vez, como componentDidMount

    // Retorna o JSX que será renderizado na tela
    return (
        <div className="app-container">
            <div className="produtos-container">
                {/* Mapeando os produtos para exibi-los em cards */}
                {produtos.map(produto => (
                    <div key={produto.id} className="produto-card">
                        {/* Exibe a imagem do produto se disponível */}
                        {produto.image && (
                            <img 
                                src={produto.image}
                                alt={produto.image} 
                                className="produto-imagem"
                            />
                        )}
                        <div className="produto-info">
                            {/* Exibe o título do produto */}
                            <h2>{produto.title}</h2>
                            {/* Exibe o preço do produto */}
                            <h3>R$ {produto.price}</h3>
                            {/* Exibe a descrição do produto */}
                            <p>{produto.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
