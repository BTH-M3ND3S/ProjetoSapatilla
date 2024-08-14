import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/Sobre';
import Home from './pages/Home';
import Cadastro from "./pages/Cadastro"

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/Cadastro" element={ <Cadastro/> } />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
