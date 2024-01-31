import React from 'react'
import MeuCard from '../styles/geral-styles'


const Card = (props) => {
    return (
       <MeuCard>
           {props.children}
           
       </MeuCard>
    )
}

export default Card
