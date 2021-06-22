import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/home/Main";
import DetalhesProduto from "./pages/detalhesDeProduto/DetalhesProduto";
import Login from "./pages/login/Login";
import CadastroCliente from "./pages/cadastroCliente/CadastroCliente";
import Carrinho from "./pages/carrinho/Carrinho";
import Importados from './pages/importados/Importados';
import FreteGratis from "./pages/frete-gratis/FreteGratis";
import Nacionais from './pages/nacionais/Nacionais';

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/DetalhesProduto" component={DetalhesProduto} />
      <Route path="/Login" component={Login} />
      <Route path="/CadastroCliente" component={CadastroCliente} />
      <Route path="/Carrinho" component={Carrinho} />
      <Route path="/importados" component={Importados} />
      <Route path="/FreteGratis" component={FreteGratis} />
      <Route path="/Nacionais" component={Nacionais} />
    </Switch>
  </BrowserRouter>
);

export default Routers;


