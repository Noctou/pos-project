import { useState } from "react";

import Orders from '../components/Orders';
import MainContent from '../components/MainContent';
import Calculator from '../components/Calculator';

export default function HomePage(){
    const [orderedItems, setOrderedItems] = useState([]);

    const addToOrder = (item) => {
        setOrderedItems((prev) => {
            const existingItemIndex = prev.findIndex((order) => order.name === item.name);

            if(existingItemIndex !== -1){

                const updatedOrders = [...prev];
                updatedOrders[existingItemIndex] = {
                    ...updatedOrders[existingItemIndex],
                    quantity: updatedOrders[existingItemIndex].quantity + 1
                };
                return updatedOrders;
            }else{
                return [...prev, {...item, quantity: 1}];
            }
        });
    };

    const reduceQuantity = (itemName) => {
        setOrderedItems((prev) => {
            return prev
                .map((order) =>
                order.name === itemName
                ? { ...order, quantity: order.quantity -1 }
                : order
            )
            .filter ((order) => order.quantity > 0);
        });
    };

    return(
        <>
            <div className="container home">
                <div className="items-container">
                    <MainContent onAddToOrder={addToOrder}/>
                </div>
                <div className="orders-container">
                    <Orders orderedItems={orderedItems} onReduceQuantity={reduceQuantity}/>
                    <Calculator />
                </div>
            </div>
        </>
    )
}