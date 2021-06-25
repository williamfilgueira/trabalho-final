function formatarParaValorReal(valor){
    return Number(valor).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    formatarParaValorReal  
}