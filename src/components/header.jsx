import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";


function Header() {
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
                >
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header