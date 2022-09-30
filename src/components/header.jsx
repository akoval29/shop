import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";


function Header() {
    return(
        <AppBar>
            <Toolbar>
                <Typography>
                    MUI Shop
                </Typography>

                <IconButton>
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header