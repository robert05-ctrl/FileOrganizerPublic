// src/PaymentComponent.js
import React from 'react';
import * as PortOne from '@portone/browser-sdk/v2';

function PaymentComponent() {
  const handlePayment = async () => {
    // Create a unique payment ID (using crypto.randomUUID if available)
    const paymentId = `payment-${crypto.randomUUID()}`;
    
    try {
      // Request a payment using PortOne's SDK.
      const response = await PortOne.requestPayment({
        storeId: "store-1b6d7be7-c2cf-4e99-bf2f-a1ea45bb3173",           // Replace with your actual store ID.
        channelKey: "channel-key-5ac615e1-e0b4-412b-b57e-1bbe47d09210",       // Replace with your actual channel key.
        paymentId: paymentId,
        orderName: "Test Order - Product XYZ",
        totalAmount: 1000,                    // Payment amount in minor units (KRW: multiply by 1, USD: multiply by 100, etc.).
        currency: "CURRENCY_KRW",             // Currency code (check PortOne docs for supported values).
        payMethod: "EASY_PAY",
        redirectUrl: `${window.location.origin}/payment-redirect`  // Redirect URL for mobile redirect flow.
      });
      
      // Check if an error was returned.
      if (response.code !== undefined) {
        alert(`Payment Error: ${response.message}`);
        return;
      }
      
      // If you are not using a full redirect flow, call your backend to complete the payment.
      // (For redirect mode, the user will be sent back to your redirectUrl with query parameters.)
      const backendResponse = await fetch(`https://2lnui99nkh.execute-api.ap-southeast-2.amazonaws.com/dev`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentId: paymentId,
          order: {
            amount: 1000,
            orderName: "Test Order - Product XYZ"
          }
        })
      });
      
      const result = await backendResponse.json();
      if (result.success) {
        alert("Payment completed successfully!");
      } else {
        alert("Payment verification failed: " + result.error);
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      alert("An error occurred during payment processing.");
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default PaymentComponent;
