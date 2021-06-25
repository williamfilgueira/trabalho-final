import React from 'react';
import Header from '../../components/Header/index'
import MeuCardDetalhes from '../../styles/geral-styles'
import api from '../../service/api'
import Produto from '../../models/Produto'
import './carrinho.css'

import Card from '../../components/Card';

import { IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { Link } from "react-router-dom";


import { InputText, Button } from '../../styles/geral-styles'

export default class Carrinho extends React.Component {
  state = {
    produtos: [],
    prod: new Produto()
  };



  async componentDidMount() {
    this.obterProdutos();
    // const {id} = this.props.match.params;
    // const resposta = await api.get("/produtos/"+id);
    // this.setState({produto: new Produto(resposta.data)})

  }

  obterProdutos = async () => {
    var produtos = await api.get("/produtos/carrinho");

    console.log('oi')
    console.log(produtos)
    this.setState({
      produtos: produtos.data.map(
        (obj) => new Produto(obj)
      )
    })
  }

  render() {
    const { produtos } = this.state;
    const valorTotal = 0;
    return (
      <div className="detalhes">


        {produtos.map(produto => (

          <div id="desc" item key={produto.id}>



           
            <img  src={produto.urlImagem} alt="imagem" />
           
            <p>{produto.nome}</p>

            <p>R$ {produto.preco},00</p>


            <div><Button>+</Button></div>
            <div><Button>-</Button></div>


          </div>
        ))}

        <span>Valor Total= R${valorTotal}</span>




      </div>)
  }

}