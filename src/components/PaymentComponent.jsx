import React, { useState } from "react";
import * as PortOne from "@portone/browser-sdk/v2";

function PaymentComponent() {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [licenseKey, setLicenseKey] = useState("");

  // Generate a unique orderId
  const orderId = `order-${crypto.randomUUID()}`;

  const handlePayment = async () => {
    try {
      // Step 1: Create an order record in your backend
      const createOrderResponse = await fetch(
        "https://2lnui99nkh.execute-api.ap-southeast-2.amazonaws.com/dev/createOrder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId,
            amount: 1000, // Amount must match PortOne expectations
            orderName: "Test Order - Product XYZ",
          }),
        }
      );
      const createOrderResult = await createOrderResponse.json();
      if (!createOrderResult.success) {
        alert("Order creation failed: " + createOrderResult.error);
        return;
      }
      
      // Step 2: Initiate payment via PortOne SDK
      const paymentId = `payment-${crypto.randomUUID()}`;
      const portOneResponse = await PortOne.requestPayment({
        storeId: "store-1b6d7be7-c2cf-4e99-bf2f-a1ea45bb3173", // Replace with your actual store ID
        channelKey: "channel-key-5ac615e1-e0b4-412b-b57e-1bbe47d09210", // Replace with your actual channel key
        paymentId,
        orderName: "Test Order - Product XYZ",
        totalAmount: 1000, // Payment amount in minor units
        currency: "KRW",   // Currency code
        payMethod: "EASY_PAY",
        redirectUrl: `${window.location.origin}/payment-redirect`
      });
      
      if (portOneResponse.code !== undefined) {
        alert(`Payment Error: ${portOneResponse.message}`);
        return;
      }
      
      // Step 3: Send paymentId and orderId to your payment verification backend
      const backendResponse = await fetch(
        "https://2lnui99nkh.execute-api.ap-southeast-2.amazonaws.com/dev/paymentComplete",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId, orderId }),
        }
      );
      const result = await backendResponse.json();
      if (result.success && result.downloadUrl && result.licenseKey) {
        // Store the generated license key locally
        localStorage.setItem("licenseKey", result.licenseKey);
        setLicenseKey(result.licenseKey);
        // Set the download URL for the exe file
        setDownloadUrl(result.downloadUrl);
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
      {downloadUrl && (
        <div>
          <p style={{ color: "#000", backgroundColor: "#f0f0f0" }}>
            Payment successful! Your license key is:{" "}
            <code style={{ color: "#000", backgroundColor: "#f0f0f0" }}>{licenseKey}</code>
          </p>
          <a href={downloadUrl} download>
            Click here to download the exe file
          </a>
        </div>
      )}
    </div>
  );
}

export default PaymentComponent;


