import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/Sobre';
import Home from './pages/Home';
import Cadastro from "./pages/Cadastro"
import Contato from './pages/Contato';

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/Cadastro" element={ <Cadastro/> } />
        <Route path="/Contato" element={ <Contato/> } />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
