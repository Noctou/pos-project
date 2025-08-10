export default function Calculator(){
    return(
        <div className="calculator-container">
            <div className="display">
                <table className="calculator-display-table">
                    <tr>
                        <td>Total Price:</td>
                        <td className="totalPrice">P</td>
                    </tr>
                    <tr>
                        <td>Payment:</td>
                        <td className="payment">P</td>
                    </tr>
                    <tr>
                        <td>Change:</td>
                        <td className="change">P</td>
                    </tr>
                </table>
            </div>
            <div className="calculator-buttons">
                {["7","8","9","10","4","5","6","20","1","2","3","30","00","0", "←"].map((label, index) =>(
                    <button id={`btn-${label || "empty"}`} key={index}>
                        {label}
                    </button>
                ))}
            </div>
            <div className="check-out-buttons">
                <button id="cancel-button">Cancel</button>
                <button id="check-out-button">Check Out</button>
            </div>
        </div>
    );
}
