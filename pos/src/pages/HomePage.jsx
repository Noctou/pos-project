import { useState, useEffect} from "react";

import Orders from '../components/homePage/Orders';
import MainContent from '../components/homePage/MainContent';
import Calculator from '../components/homePage/Calculator';
import { reduceQty,getItems,saveHistory }  from "../services/api.js";

export default function HomePage(){
    const [orderedItems, setOrderedItems] = useState([]);
    const [showSummary, setShowSummary] = useState(false);
    const [items, setItems] = useState([]);
      
    const fetchItems = () => {
        getItems().then(setItems).catch(console.error);
    };
    
    useEffect(() => { fetchItems(); }, [showSummary]);

    const now = new Date();
    const currTime = now.toLocaleString();

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

    const updateTable = async (order) => {
        await reduceQty(order);
    };

    const clearOrders = () => {
        setOrderedItems([]);
    };

    const handleCheckOut = () => {
        setShowSummary(true);
    }

    function saveToHistory(){
        const historyData = orderedItems.map((item) => ({
            product_name : item.name,
            product_type : item.category,
            quantity : item.quantity,
            total_price : item.quantity * item.price,
            time : currTime
        }));
        saveHistory(historyData);
    }

    return(
        <>
            <div className="container home">
                <div className="items-container">
                    <MainContent onAddToOrder={addToOrder} itemsFromDB={items} orderedItems={orderedItems}/>
                </div>
                <div className="orders-container">
                    <Orders orderedItems={orderedItems} onReduceQuantity={reduceQuantity}/>
                    <Calculator
                        orderedItems={orderedItems}
                        onCancel={clearOrders}
                        onCheckOut={handleCheckOut}
                    />
                </div>
            </div>

            {showSummary && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Purchase Summary</h2>
                        <p><strong>Time: </strong>{currTime} </p>
                        <ul>
                            {orderedItems.map((item, idx) => (
                                <li key={idx}>
                                    {item.name} * {item.quantity} = ₱{item.price * item.quantity}
                                </li>
                            ))}
                        </ul>
                        <p>
                            <strong>
                                Total: ₱
                                {orderedItems.reduce(
                                    (sum, i) => sum + i.price * i.quantity,
                                    0
                                )}
                            </strong>
                        </p>
                        <button
                            onClick={() => {
                                setShowSummary(false);
                                updateTable(orderedItems);
                                clearOrders();
                                saveToHistory();
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}