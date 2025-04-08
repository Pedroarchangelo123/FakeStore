// Importando o arquivo de estilo CSS para o cabeçalho
import React from 'react'; // Importa o React para poder criar o componente
import './header.css'; // Importando o arquivo de estilo CSS específico para o cabeçalho

// Componente funcional Header
export default function Header() {
    // Retorna o JSX do cabeçalho que será renderizado na página
    return (
        <header className='header'> {/* A classe 'header' aplica o estilo CSS do cabeçalho */}
            <h1>FakeStore API product list</h1> {/* Título da página */}
        </header>
    );
}
