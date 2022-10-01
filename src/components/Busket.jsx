import {Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, Typography} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Busket = props => {
    const {order = [], removeFromOrder, cardOpen, closeCard}=props;

    return(
        <Drawer 
            anchor="right" 
            open={cardOpen}
            onClose={closeCard}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary='Корзина'/>
                </ListItem>
                <Divider/>
                {
                    !order.length ? (<ListItem>Корзина пуста</ListItem>) : 
                    (
                    <>
                        {order.map((item) => (<BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />))}
                        
                        <Divider/>
                        <ListItem>
                            <Typography sx={{fontWeight: 700}}>
                                Загальна вартість: 
                                {' '}
                                {order.reduce((acc, item) => {return acc + item.price * item.quantity;}, 0)}
                                {' '} 
                                гривень
                            </Typography>
                        </ListItem>
                    </>
                    )
                }
            </List>
        </Drawer>
    )
}

export default Busket