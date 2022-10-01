import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";


function Header({handleCard, orderLenght}) {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant='h6'
                    component='span'
                    sx={{flexGrow: 1}}
                >
                    MUI Shop
                </Typography>

                <IconButton
                    color='inherit'
                    onClick={handleCard}
                >
                    <Badge color="secondary" badgeContent={orderLenght}>
                        <ShoppingBasket/>
                    </Badge>
                    
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header