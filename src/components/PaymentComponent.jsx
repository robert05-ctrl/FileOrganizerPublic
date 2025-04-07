import React, { useState } from 'react';
import styled from 'styled-components';
import * as PortOne from '@portone/browser-sdk/v2';
import { useAuthenticator } from '@aws-amplify/ui-react';

const PaymentContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const PaymentHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const PaymentTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PaymentDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const PlanDetails = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const PlanName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const PlanPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const PriceLabel = styled.span`
  color: #666;
`;

const PriceValue = styled.span`
  font-weight: 500;
  color: #333;
`;

const PaymentButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #e6f7ee;
  border: 1px solid #27ae60;
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
`;

const LicenseKey = styled.code`
  display: block;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.8rem;
  margin: 1rem 0;
  font-family: monospace;
  word-break: break-all;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #27ae60;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #219653;
  }
`;

const ErrorMessage = styled.div`
  background-color: #fee;
  border: 1px solid #e74c3c;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  color: #e74c3c;
  text-align: center;
`;

function PaymentComponent({ planType, planPrice, planName, currency = 'KRW' }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [error, setError] = useState('');
  
  const { user } = useAuthenticator((context) => [context.user]);
  
  // Generate a unique orderId
  const orderId = `order-${crypto.randomUUID()}`;
  
  const handlePayment = async () => {
    setIsProcessing(true);
    setError('');
    
    try {
      // Step 1: Create an order record in your backend
      const createOrderResponse = await fetch(
        "https://2lnui99nkh.execute-api.ap-southeast-2.amazonaws.com/dev/createOrder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId,
            amount: planPrice,
            orderName: `FiletoFolder - ${planName} Plan`,
            userEmail: user?.attributes?.email || 'guest@example.com',
            planType
          }),
        }
      );
      
      const createOrderResult = await createOrderResponse.json();
      if (!createOrderResult.success) {
        setError(`Order creation failed: ${createOrderResult.error}`);
        setIsProcessing(false);
        return;
      }
      
      // Step 2: Initiate payment via PortOne SDK
      const paymentId = `payment-${crypto.randomUUID()}`;
      const portOneResponse = await PortOne.requestPayment({
        storeId: "store-1b6d7be7-c2cf-4e99-bf2f-a1ea45bb3173",
        channelKey: "channel-key-5ac615e1-e0b4-412b-b57e-1bbe47d09210",
        paymentId,
        orderName: `FiletoFolder - ${planName} Plan`,
        totalAmount: planPrice,
        currency: currency,
        payMethod: "EASY_PAY",
        redirectUrl: `${window.location.origin}/payment-redirect`
      });
      
      if (portOneResponse.code !== undefined) {
        setError(`Payment Error: ${portOneResponse.message}`);
        setIsProcessing(false);
        return;
      }
      
      // Step 3: Send paymentId and orderId to your payment verification backend
      const backendResponse = await fetch(
        "https://2lnui99nkh.execute-api.ap-southeast-2.amazonaws.com/dev/paymentComplete",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            paymentId, 
            orderId,
            userEmail: user?.attributes?.email || 'guest@example.com',
            planType
          }),
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
        setError(`Payment verification failed: ${result.error}`);
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      setError("An error occurred during payment processing. Please try again later.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', { 
      style: 'currency', 
      currency: currency 
    }).format(price).replace('₩', '');
  };
  
  return (
    <PaymentContainer>
      <PaymentHeader>
        <PaymentTitle>결제 진행</PaymentTitle>
        <PaymentDescription>
          선택하신 플랜의 결제를 진행합니다. 결제 완료 후 라이센스 키와 다운로드 링크가 제공됩니다.
        </PaymentDescription>
      </PaymentHeader>
      
      <PlanDetails>
        <PlanName>{planName} 플랜</PlanName>
        <PlanPrice>
          <PriceLabel>결제 금액</PriceLabel>
          <PriceValue>{formatPrice(planPrice)}원</PriceValue>
        </PlanPrice>
        <PlanPrice>
          <PriceLabel>결제 방식</PriceLabel>
          <PriceValue>간편 결제</PriceValue>
        </PlanPrice>
      </PlanDetails>
      
      {!downloadUrl ? (
        <PaymentButton 
          onClick={handlePayment} 
          disabled={isProcessing}
        >
          {isProcessing ? '결제 처리 중...' : '결제하기'}
        </PaymentButton>
      ) : (
        <SuccessMessage>
          <h3>결제가 완료되었습니다!</h3>
          <p>아래 라이센스 키를 사용하여 FiletoFolder를 활성화하세요.</p>
          <LicenseKey>{licenseKey}</LicenseKey>
          <DownloadButton href={downloadUrl} download>
            FiletoFolder 다운로드
          </DownloadButton>
        </SuccessMessage>
      )}
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </PaymentContainer>
  );
}

export default PaymentComponent;
