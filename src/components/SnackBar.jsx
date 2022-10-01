import { Snackbar, Alert } from "@mui/material";

function SnackBar ({isSnackOpen, snackHandleClose}) {
    return(
        <Snackbar 
            open={isSnackOpen}
            onclose={snackHandleClose}
            autoHideDuration={3000}
        >
            <Alert severity="success">Товар добавлено до корзини !</Alert>
        </Snackbar>
    )
}

export default SnackBar