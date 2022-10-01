import {IconButton, ListItem, Typography} from "@mui/material";
import { Close } from "@mui/icons-material";

const BasketItem = (props) => {
    const {removeFromOrder, id, name, price, quantity} = props;
    return (
        <ListItem>
            <Typography variant='body1'>
                {name} {price}грн x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;