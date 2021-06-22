export default class Cliente {

    constructor(obj){
        obj = obj || {}; //Tratamento para não deixar da um erro quando o obj vir null, undefined, vazio ou 0;
                
        this.id = obj.id;
        this.nome = obj.nome;
        this.email = obj.email;
        this.senha = obj.senha;
        this.logradouro = obj.logradouro;
        this.cep = obj.cep;
        this.bairro = obj.bairro;
        this.numero = obj.numero;
        this.referencia = obj.referencia;
       
    }

    
}