import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'

import useStyles from './styles';
const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.urlImagem} alt={item.nome} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.nome}</Typography>
                <Typography variant="h5">{}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button tpye="button" size="small" onClick={() => onUpdateCartQty(item.id,item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button tpye="button" size="small" onClick={() => onUpdateCartQty(item.id,item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary"   onClick={() => onRemoveFromCart(item.id)}>Remove</Button>

            </CardActions>

        </Card>
    )
}

export default CartItem
