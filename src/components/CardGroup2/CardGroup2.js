import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        { id: 1, name: 'infinix 11 pro', price: 21500 },
        { id: 2, name: 'Samsung Galaxy pro', price: 25000 },
        { id: 3, name: 'i-phone', price: 121500 }
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2 product={product} key={product.id}></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;