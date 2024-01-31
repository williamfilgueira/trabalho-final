import styled from 'styled-components';
// Arquivo para trabalhar com divs, sections, navs, headers e outros.

const MeuCard = styled.div`
    
    margin: 20px;
    width:50vh;
    height:40vh;
    padding:20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    margin-bottom:5px;
    img {
        width: 120px;
        height: 120px
    };

    h3 {
        font-size: 16px;
    };

    a {
        text-decoration: none;
        color: #3483eb;
    }
    
   
   
`;



export const Button = styled.button`
    width: 70%;
    color: #ffffff;
    margin-top: 5px;
    border-radius: 4px;
    padding: 12px 14px;
    outline:none;
    border: none;
    cursor: pointer;
    background-color: #3483eb;

    :hover{
        background-color:#5396ed;
    }


`;

export const InputText = styled.input`
    width: 50%;
    padding: 12px 14px;
    margin: 0px 0px;
    display: inline-block;
    border: 1px solid #ddd;
    outline:none;
    border-radius: 4px;
    box-sizing: border-box;
`;


export const DivPrincipal = styled.div`

    max-width: 400px;
    border: 1px solid #ddd;
    background-color: white;
    margin: auto;
    margin-top: 15px;
    padding: 25px;
    padding-top: 0px;
    padding-bottom: 5px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgb(50 50 50 / 82%);
    min-height: 90%;

`;

export const DivPrincipalCadastro = styled.div`

    max-width: 400px;
    border: 1px solid #ddd;
    background-color: white;
    margin: auto;
    margin-top: 15px;
    padding: 25px;
    padding-top: 0px;
    padding-bottom: 5px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgb(50 50 50 / 82%);
    min-height: 90%;

`;

export const DivImagem = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

`;

export const Image = styled.img`

    
    width:70px;
    height: 70px;


`;



export const DivLogin = styled.div`


    width: 100%;
    margin-bottom: 10px;

`; 

export const Botão = styled.button`

width: 100%;
color: #ffffff;
margin-top: 20px;
border-radius: 4px;
padding: 5px;
padding: 12px 14px;
outline:none;
border: none;
cursor: pointer;
background-color: #3483eb;

:hover{
    background-color:#5396ed;
}

`;

export const BotãoCadastrar = styled.button`

width: 100%;
color: #3483eb;
margin-top: 20px;
border-radius: 4px;
padding: 5px;
padding: 12px 14px;
outline:none;
border-color: #3483eb;
cursor: pointer;
background-color: #ffffff;

:hover{
    background-color: #3483eb;
    color: #ffffff;
}

`;

export const DivParagrafo = styled.div`

    display: flex;
    flex-direction: column;

`;

export const InputLogin = styled.input`

    width: 100%;
    border: 2px solid gray;
    padding: 12px 14px;
    border: 0;
    border: 2px solid #3483eb;
    :focus {
    border-color: 2px solid #3483eb;
    }; 
    
`;

export const DivLink = styled.div`

    display: flex;
    justify-content: flex-end;


`;

export const DivSenhaTelefone = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

`;



export const DivInputLabel = styled.div`

    display: flex;
    flex-direction: column;
    margin-right:5px;

`;

export const DivInputLabel2 = styled.div`

    display: flex;
    flex-direction: column;
    

`;

export const DivNumeroBairroCidade = styled.div`

    display: flex;
    flex-direction: row;

`;

export default MeuCard