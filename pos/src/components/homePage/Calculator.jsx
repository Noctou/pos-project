import { useState } from 'react';

export default function Calculator({ orderedItems, onCancel, onCheckOut }){

    const [payment, setPayment] = useState("");
    
    const totalPrice = orderedItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    const change = payment ? parseInt(payment) - totalPrice : 0;

    const handleButtonClick = (value) => {
        if (value === "←") {
            setPayment((prev) => prev.slice(0, -1));

        }else {
            setPayment((prev) => prev + value);
        }
    };

    return(
        <div className="calculator-container">
            <div className="display">
                <table className="calculator-display-table">
                    <tr>
                        <td>Total Price:</td>
                        <td className="totalPrice">₱{totalPrice}</td>
                    </tr>
                    <tr>
                        <td>Payment:</td>
                        <td className="payment">₱{payment}</td>
                    </tr>
                    <tr>
                        <td>Change:</td>
                        <td className="change">₱{change}</td>
                    </tr>
                </table>
            </div>
            <div className="calculator-buttons">
                {["7","8","9","10","4","5","6","20","1","2","3","30","00","0", "←"].map((label, index) =>(
                    <button
                        id={`btn-${label || "empty"}`}
                        key={index}
                        onClick={() => handleButtonClick(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="check-out-buttons">
                <button
                    id="cancel-button"
                    onClick={() => {
                        setPayment("");
                        onCancel("");
                    }}
                    >
                        Cancel
                </button>
                <button
                    id="check-out-button"
                    onClick={() => {
                        if(!payment || !totalPrice || Number(payment) < totalPrice ){
                            return;
                        }
                        onCheckOut();
                        setPayment("");
                    }}
                >
                    Check Out
                </button>
            </div>
        </div>
    );
}
