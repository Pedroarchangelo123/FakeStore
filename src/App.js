// Importando as dependências necessárias
import React from "react"; // Importa o React para criar o componente funcional
import Header from './components/Header'; // Importa o componente Header (cabeçalho)
import MainPage from './components/MainPage'; // Importa o componente MainPage (página principal)

// Componente funcional principal do aplicativo
export default function App() {
  return (
    <div className="App"> {/* Contêiner principal do aplicativo */}
      <Header /> {/* Exibe o cabeçalho no topo da página */}
      <MainPage /> {/* Exibe o conteúdo da página principal abaixo do cabeçalho */}
    </div>
  );
}
