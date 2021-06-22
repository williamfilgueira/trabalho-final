import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

// Construindo um componente em formato de função
// É chamado de Statelles
const Header = () => (
    <div className="header">
        <ul id="header1">
            <li><Link to={"/"}>Home</Link></li>
            <li><input type='text' placeholder="pesquisar"/></li> {/**COMO GERAR LINK PARA BARRA DE NAGEGAÇÃO */}
            <li><Link className="carrinho" to="/carrinho">Carrinho</Link></li>
        </ul>  
        <ul id="header2">
        <li><Link className="frete-gratis" to="/fretegratis">Frete Grátis</Link></li>
            <li><Link className="nacionais" to="/nacionais">Nacional</Link></li>
            <li><Link className="importados" to="/importados">Importados</Link></li>
        </ul>      
    </div>
);

export default Header;