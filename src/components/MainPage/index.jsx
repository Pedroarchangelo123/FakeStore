import React, { useState, useEffect } from "react";
import api from '../../services/api'
import './main.css';

export default function MainPage(){

    const [ produtos, setProdutos ] = useState([]);


    useEffect(() => {
        async function carregarProdutos(){
          try{
            const response = await api.get('https://fakestoreapi.com/products');
            setProdutos(response.data)
          } catch (error){
            console.error('Tô Não kk', error);
          }
        }
      
        carregarProdutos();
      }, []);
      return(
        <div className="app-container">
          <div className="produtos-container">
      
            {produtos.map(produto => (
              <div key={produto.id} className="produto-card">
                  {produto.image && (
                    <img src={produto.image}
                         alt={produto.image}
                         className="produto-imagem"
                      />
                    )}
                    <div className="produto-info">
                      <h2>{produto.title}</h2>
                      <h3>R$ {produto.price}</h3>
                      <p>{produto.description}</p>
                      </div>
                 </div>
               ))}
             </div>
           </div>
      )}


