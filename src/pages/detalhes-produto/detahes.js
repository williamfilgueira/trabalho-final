import React from 'react';
import api from '../../service/api'
import Produto from '../../models/Produto'
import './detalhes.css'

import { InputText, Button } from '../../styles/geral-styles'

export default class Detalhes extends React.Component {
  state = {
    produto: new Produto(),
  };



  async componentDidMount() {
    const { id } = this.props.match.params;
    const resposta = await api.get("/produtos/" + id);
    this.setState({ produto: new Produto(resposta.data) })

  }



  render() {
    const { produto } = this.state;
    return (
      <div className="detalhes">

        <div id="img"><img src={produto.urlImagem} alt="img"></img></div>

        <div id="desc">
          <span>{produto.descricao}</span>
          <p >Valor: R${produto.preco},00</p>
          <p >Cores: </p>
        </div>

        <div id="card">

          <div>
            <label>Qte pedida: </label>
            <InputText placeholder="1">
            </InputText>
          </div>

          <div>
            <label>Calcular Frete: </label>
            <InputText placeholder="25975-000"></InputText>
          </div>

          <div>
            <Button>Adicionar ao Carrinho</Button>
          </div>

          <div>
            <Button onClick={() => window.open("/login", "_self")}>Comprar agora</Button>

          </div>


        </div>




      </div>)
  }

}