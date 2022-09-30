import {Grid, Card, CardMedia, CardContent, CardActions, Typography, Button} from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";


const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{height: '100%'}}>
                <CardMedia
                    image={poster}
                    component='img'
                    title={name}
                    alt={name}
                    sx={{height: 140}}
                />

                <CardContent>
                    <Typography
                        variant='h6'
                        component='h3'

                        >{name}
                    </Typography>    
                    <Typography variant='body1'> Ціна: {price} грн.</Typography>
                </CardContent>
                <CardActions>

                </CardActions>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купити
                    </Button>
                
            </Card>
        </Grid>

        
    );
};

export default GoodsItem;