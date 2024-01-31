import React, { useState, useEffect } from "react";
import "./index.css";
import { IconButton, Badge } from '@material-ui/core';
import {InputText, Button} from '../../styles/geral-styles'

import api from '../../service/api'

import {ShoppingCart, Timer10} from '@material-ui/icons';

import { Route,useLocation } from "react-router-dom";

import Carrinho from "../../pages/carrinho/Carrinho";
import { waitFor } from "@testing-library/dom";


import Imagem from '../../image/ApiChuckNorris.png'


// Construindo um componente em formato de função
// É chamado de Statelles

const Header = (totalItems) => {
   
    const [busca, setBusca] = useState("");
    
    const efetuarBusca = () => {
        console.log({busca})
        
    }
    let path = useLocation().pathname;
    if(path !== "/login" && path !== "/cadastro" ) {
    
        
    return (
        
    <div className="header">
        <ul id="header1">
        <div className="chuck">
            <li onClick={()=> window.open("/", "_self")}> <img src={Imagem} alt="foto Da Api do Norris"/></li>
            <h5>Carros </h5>
            <h5>do tio Chuck</h5>
            </div>
            <li id="li"><InputText type='text' placeholder="pesquisar"
             id="search" 
             
             value={busca} 
              onChange={e => setBusca(e.target.value, Timer10, efetuarBusca())
               
            }
            
            />
            
           </li>
            <li>
                <div>
                        {/* <Link to="/cart">go to cart</Link> */}
                        <IconButton  aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary" onClick={()=> window.open("/carrinho", "_self")}>
                                <ShoppingCart />
                            </Badge>
                            
                        </IconButton>

                    </div>
                    </li>
        </ul>  
        <ul id="header2">
          <a><li  onClick={()=> window.open("/frete-gratis", "_self")}>Frete Gratis</li></a>

           <a><li onClick={()=> window.open("/nacionais", "_self")}>Nacional</li></a>
           <a><li onClick={()=> window.open("/importados", "_self")}> Importados</li></a>
        </ul>      
    </div>
 
      
    ) } 
    
    return (<div></div>)
        
};

export default Header;