import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";



import Carrinho from "./pages/carrinho/Carrinho";
import Home from "./pages/home/index"
import FreteGratis from "./pages/categorias/frete-gratis"
import Nacional from "./pages/categorias/nacionais"
import Importados from "./pages/categorias/importados"
import Detalhes from "./pages/detalhes-produto/detahes"
import Login from "./pages/login/index"
import Cadastro from "./pages/cadastro/index"

import Header from'./components/Header/index';

const Routers = () => (
  <BrowserRouter>
  <Header/>
    <Switch>
    
      <Route exact path="/carrinho" component={Carrinho} />
      <Route exact path="/" component={Home} />
      <Route exact path="/frete-gratis" component={FreteGratis} />
      <Route  exact path="/nacionais" component={Nacional} />
    <Route exact path="/importados" component={Importados} />
    <Route exact path="/detalhes/:id" component={Detalhes} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>
);

export default Routers;