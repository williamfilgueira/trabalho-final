import React from 'react'
import Produto from '../../models/Produto';
import api from '../../service/api'
import Card from '../../components/Card';


import {IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

export default class freteGratis extends React.Component {
    state = {
        produtos: []
    
    };

    async componentDidMount(){
        this.obterProdutos();
    }

    obterProdutos = async () => {
        const resposta = await api.get("/categorias/5");
        console.log(resposta);
        this.setState({produtos: resposta.data.produtos.map(
            (obj) => new Produto(obj)
            
        )})
    }

    render (){
        const { produtos } = this.state;

        return (
            <div className="container">
             {produtos.map(produto=>(
                
                <Card item key={produto.id}>
                     
             
                    <p>
                        <img id="imgam" src={produto.urlImagem} alt="imagem"/>
                    </p>
                     <p>{produto.nome}</p>
                    
                     <p>R$ {produto.preco},00</p>
                  
                     <IconButton onClick= {()=>this.carrinho(produto.id)} > 
                    <AddShoppingCart />
                </IconButton>
                 </Card>
            ))}    
            </div>
        )

    }
}

