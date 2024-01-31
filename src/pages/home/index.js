import React from 'react';
import Produto from '../../models/Produto';
import api from '../../service/api'
import Card from '../../components/Card';
import './index.css'
import {IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import { Link } from "react-router-dom";


export default class Home extends React.Component {

    state = {
        produtos: [],
        prod: new Produto()
        
    
    };
   

    async componentDidMount(){

        
        this.obterProdutos();
    }
     carrinho = async (id) => {
        
        
        const resposta = await api.get("/produtos/"+id);
       
       console.log(resposta)
      let prod = resposta.data;

        try {
        api.post("produtos/carrinho", prod)
        alert("Produto adicionado ao carrinho!")
        } catch(error){
            console.log(error);
            alert("Não foi possível adicionar ao carrinho")
        }
        
    }
    

    obterProdutos = async () => {
        const resposta = await api.get("/produtos/todos");
        this.setState({produtos: resposta.data.map(
            (obj) => new Produto(obj)
        )})
    }
    
    render(onAddToCart){
        const { produtos } = this.state;
       
        return (
       
        <div className="container">
            
            {produtos.map(produto=>(
                
                <Card item key={produto.id}>
                     <Link to={`/detalhes/${produto.id}`}>
                    {/* const id = {produto.id} */}
                    
                   
                    <img src={produto.urlImagem}  alt="imagem"/>
                    
                     <h3>{produto.nome}</h3>
                    
                     <h3>R$ {produto.preco},00</h3>
                     </Link>
                     <IconButton onClick= {()=>this.carrinho(produto.id)} > 
                    <AddShoppingCart />
                </IconButton>
                 </Card>
            ))}
          
        </div>);
    }

   
};

