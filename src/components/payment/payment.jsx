import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { FaWindowClose } from 'react-icons/fa';
import './payment.style.scss';

function Payment(props) {
    const { amount } = props;

    return (
        <div>
            <button onClick={props.onClose} className="close-button"><FaWindowClose/></button>

            <div className="text-2xl font-semibold tracking-widest text-red-600 uppercase text-center">Payment process</div>
            <div className="mt-4 flex justify-end">
                <div className="pr-2 font-semibold text-sm">Subtotal:</div> 
                <div className="italic">${amount}</div>
            </div>
            <div className="mt-2 flex justify-end">
                <div className="pr-2 font-semibold text-sm">Tax:</div> 
                <div className="italic">${amount / 10}</div>
            </div>

            <div className="w-full border-b-2 border-gray-400"></div>

            <div className="mt-2 mb-4 flex justify-end">
                <div className="pr-2 font-semibold text-sm">Total:</div> 
                <div className="italic">${amount + amount / 10}</div>
            </div>

            <PayPalButton
                amount={amount}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
            
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                        orderID: data.orderID
                        })
                    });
                }}
            />
        </div>
    );
}

export default Payment;