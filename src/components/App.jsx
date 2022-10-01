import { useState } from 'react';

import Busket from './Busket';
import Header from './Header';
import BasketList from './BasketList';
import GoodsList from './GoodsList';
import Search from './Search';
import SnackBar from './SnackBar';

import { goods } from '../data/goods';
import { Container } from '@mui/system';

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCardOpen, setCardOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState(false);

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        )
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }
        setSnackOpen(true);
    };

    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
        <>
            <Header
                handleCard={() => setCardOpen(true)}
                orderLenght={order.length}
            />
            <Container sx={{mt: '2rem'}} >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
                <BasketList
                    order={order}
                    setOrder={removeFromOrder}
                />
            </Container>
            <Busket
                order={order}
                cardOpen={isCardOpen}
                removeFromOrder={removeFromOrder}
                closeCard={() => setCardOpen(false)}
            />
            <SnackBar
                isSnackOpen={isSnackOpen}
                snackHandleClose={() => setSnackOpen(false)}
            />
        </>
    );
}

export default App;
