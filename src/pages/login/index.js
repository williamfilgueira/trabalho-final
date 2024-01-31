import React from 'react';
import { Link } from "react-router-dom";
import {DivPrincipal, Image, DivImagem, DivLogin,  Botão, DivParagrafo, InputLogin} from "../../styles/geral-styles";
import {DivLink, BotãoCadastrar} from "../../styles/geral-styles";

import Imagem from "../../image/ApiChuckNorris.png";

import Header from '../../components/Header/index'


const Login = () => (

   
    <div className="container">
       
        {/* <h1>Página Login</h1> */}
        {/* <Link to={`/cadastro`}>
            <h1>Ir para pagina de cadastro</h1> 
        </Link>
        <Link to={`/carrinho`}>
            <h1>Ir para Página Carrinho </h1> 
        </Link>
        <Link to={`/`}>
            <h1>Ir para Página Inicial</h1> 
        </Link> */}
             
        <DivPrincipal>
            
       
              
                <DivImagem>
                        <Image src={Imagem} alt="foto Da Api do Norris" />
                        <h5>Login</h5>
                        <h5>Carros do tio Chuck</h5>
                </DivImagem>
          
                        

                <DivLogin>
                    <label for="email">E-mail</label> <br/>
                    <InputLogin id="email" type="text" placeholder="Exemplo@exemplo.com"></InputLogin>
                    
                </DivLogin>

                <DivLogin>
                    <label for="senha">Senha</label> <br/>
                    <InputLogin id="senha" type="password" placeholder="Digite sua senha"></InputLogin>

                </DivLogin>

                <DivLogin>
                    <DivParagrafo>                    
                        < Botão >
                        Entrar 
                        </Botão > < br/>
                        <p>Ao continuar, você concorda com as condições
                            de uso do Carrros do tio Chuck. por favor verifique
                            a Notificação de privacidade, Notificação de Cookies e
                            a Notificaçao
                            de  Baseados em Interesse.</p> <br />
                        <DivLink>
                            <a href="##">Esqueci minha senha</a>
                        </DivLink>
                       < BotãoCadastrar onClick={()=> window.open("/cadastro", "_self")}>
                        Criar sua conta grátis 
                        </BotãoCadastrar >
                    </DivParagrafo>
                </DivLogin>
            
            
        </DivPrincipal> 


    </div>
);

export default Login;