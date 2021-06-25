import React from 'react';
import { Link } from "react-router-dom";
import { DivPrincipalCadastro, Image, DivImagem, DivLogin, InputLogin } from "../../styles/geral-styles";
import { BotãoCadastrar, DivParagrafo, Botão, DivSenhaTelefone } from "../../styles/geral-styles";
import { DivInputLabel, DivNumeroBairroCidade, DivInputLabel2 } from "../../styles/geral-styles";


import Imagem from "../../image/ApiChuckNorris.png";

const Cadastro = () => (
    <div className="cadastro">
        {/* <h1>Página Cadastro</h1> 
        <Link to={`/login`}>
            <h1>Ir para Página Login</h1> 
        </Link>
        <Link to={`/`}>
            <h1>Página Inicial</h1> 
        </Link> */}

        <DivPrincipalCadastro>


            <DivImagem>
                <Image src={Imagem} alt="foto Da Api do Norris" />
                <h5>Cadastro</h5>
                <h5>Carros do tio Chuck</h5>
            </DivImagem>

            <DivLogin>
                <label for="nome">Nome</label> <br />
                <InputLogin id="nome" type="text" placeholder="Digite o seu nome"></InputLogin>
            </DivLogin>

            <DivLogin>
                <label for="email">E-mail</label> <br />
                <InputLogin id="email" type="text" placeholder="Exemplo@exemplo.com"></InputLogin>
            </DivLogin>

            <DivSenhaTelefone>

                <DivInputLabel>
                    <label for="senha">Senha</label> 
                    <InputLogin id="senha" type="password" placeholder="123456"></InputLogin>
                </DivInputLabel>
                <DivInputLabel2>
                    <label for="telefone">Telefone</label> 
                    <InputLogin id="telefone" type="text" placeholder="(21)98877-6655"></InputLogin>
                </DivInputLabel2>
            </DivSenhaTelefone> <br/>

            <DivSenhaTelefone>

                <DivInputLabel>
                    <label for="cep">Cep</label> 
                    <InputLogin id="cep" type="text" placeholder="25954240"></InputLogin>
                </DivInputLabel>
                <DivInputLabel2>
                    <label for="logradouro">logradouro</label> 
                    <InputLogin id="logradouro" type="text" placeholder="Rua Tamoyo"></InputLogin>
                </DivInputLabel2>
            </DivSenhaTelefone> <br/>

            <DivNumeroBairroCidade>
            <DivInputLabel>
                <label for="numero">Número</label> 
                <InputLogin id="numero" type="text" placeholder="368"></InputLogin>
                </DivInputLabel>

                <DivInputLabel>
                <label for="bairro">Bairro</label> 
                <InputLogin id="bairro" type="text" placeholder="Meudon"></InputLogin>
                </DivInputLabel>

                <DivInputLabel2>
                <label for="cidade">Cidade</label> 
                <InputLogin id="cidade" type="text" placeholder="Teresópolis"></InputLogin>
                </DivInputLabel2>

            </DivNumeroBairroCidade>

            <DivLogin>
                <DivParagrafo>
                <Link to={`/login`}>  
                    < Botão >
                        Cadastrar
                    </Botão > 
                </Link>

                    <Link to={`/`}>< BotãoCadastrar >
                        Voltar
                    </BotãoCadastrar > </Link>
                </DivParagrafo>
            </DivLogin>


        </DivPrincipalCadastro>

    </div>
);

export default Cadastro;