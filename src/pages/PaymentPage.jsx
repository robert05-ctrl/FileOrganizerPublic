import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentComponent from '../components/PaymentComponent';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useLocation } from 'react-router-dom';

const PaymentPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const PaymentHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PaymentTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const PaymentDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const BillingToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const ToggleOption = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.active ? '#3498db' : '#666'};
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #3498db;
  border-radius: 15px;
  cursor: pointer;
  padding: 3px;
`;

const ToggleButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transform: ${props => props.isYearly ? 'translateX(30px)' : 'translateX(0)'};
  transition: transform 0.3s ease;
`;

const PlanSelectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const PlanCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid ${props => props.selected ? '#3498db' : 'transparent'};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const PlanBadge = styled.span`
  background-color: #3498db;
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  align-self: flex-start;
  margin-bottom: 1rem;
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  margin-bottom: 1.5rem;
`;

const Price = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
`;

const PriceDetail = styled.span`
  font-size: 1rem;
  color: #666;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-grow: 1;
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #555;
  
  &:before {
    content: "✓";
    color: ${props => props.included ? '#3498db' : '#ccc'};
    font-weight: bold;
    margin-right: 0.8rem;
  }
  
  ${props => !props.included && `
    text-decoration: line-through;
    color: #999;
  `}
`;

const PaymentPage = () => {
  const { authStatus, signIn } = useAuthenticator(context => [context.authStatus]);
  const location = useLocation();
  const preselectedPlan = location.state?.selectedPlan;
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(preselectedPlan || null);

  const toggleBilling = () => setIsYearly(!isYearly);
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      badge: '',
      monthlyPrice: 9900,
      yearlyPrice: 99000,
      features: [
        { text: '제한된 시간 사용 (30일)', included: true },
        { text: '기본 파일 정리 기능', included: true },
        { text: '최대 1,000개 파일 처리', included: true },
        { text: '1개 기기 지원', included: true },
        { text: '이메일 지원', included: true },
        { text: '고급 분류 알고리즘', included: false },
        { text: '클라우드 백업', included: false },
        { text: '자동 정리 스케줄링', included: false },
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      badge: '인기',
      monthlyPrice: 19900,
      yearlyPrice: 199000,
      features: [
        { text: '제한된 사용 구독', included: true },
        { text: '고급 파일 정리 기능', included: true },
        { text: '최대 10,000개 파일 처리', included: true },
        { text: '3개 기기 지원', included: true },
        { text: '이메일 및 채팅 지원', included: true },
        { text: '고급 분류 알고리즘', included: true },
        { text: '클라우드 백업', included: false },
        { text: '자동 정리 스케줄링', included: false },
      ]
    },
    {
      id: 'plus',
      name: 'Plus',
      badge: '',
      monthlyPrice: 29900,
      yearlyPrice: 299000,
      features: [
        { text: '무제한 사용 구독', included: true },
        { text: '모든 파일 정리 기능', included: true },
        { text: '무제한 파일 처리', included: true },
        { text: '무제한 기기 지원', included: true },
        { text: '우선 지원 (24/7)', included: true },
        { text: '고급 분류 알고리즘', included: true },
        { text: '클라우드 백업', included: true },
        { text: '자동 정리 스케줄링', included: true },
      ]
    }
  ];
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', { 
      style: 'currency', 
      currency: 'KRW' 
    }).format(price).replace('₩', '');
  };
  
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };
  
  return (
    <PaymentPageContainer>
      <PaymentHeader>
        <PaymentTitle>결제 및 다운로드</PaymentTitle>
        <PaymentDescription>
          원하는 플랜을 선택하고 결제를 진행하세요. 결제 완료 후 라이센스 키와 다운로드 링크가 제공됩니다.
        </PaymentDescription>
      </PaymentHeader>
      
      {authStatus !== 'authenticated' ? (
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>로그인이 필요합니다</h2>
          <p>결제를 진행하기 위해서는 로그인이 필요합니다.</p>
          <button 
            onClick={signIn} 
            style={{ 
              backgroundColor: '#3498db', 
              color: 'white', 
              border: 'none', 
              padding: '1rem 2rem', 
              fontSize: '1.1rem', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            로그인하기
          </button>
        </div>
      ) : (
        <>
          <BillingToggleContainer>
            <ToggleOption active={!isYearly}>월간 결제</ToggleOption>
            <ToggleSwitch onClick={toggleBilling}>
              <ToggleButton isYearly={isYearly} />
            </ToggleSwitch>
            <ToggleOption active={isYearly}>연간 결제 (20% 할인)</ToggleOption>
          </BillingToggleContainer>
          
          <PlanSelectionContainer>
            {plans.map((plan) => (
              <PlanCard 
                key={plan.id} 
                selected={selectedPlan?.id === plan.id}
                onClick={() => handlePlanSelect(plan)}
              >
                {plan.badge && <PlanBadge>{plan.badge}</PlanBadge>}
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  <Price>{formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}</Price>
                  <PriceDetail>원 / {isYearly ? '년' : '월'}</PriceDetail>
                </PlanPrice>
                <PlanFeatures>
                  {plan.features.map((feature, idx) => (
                    <PlanFeature key={idx} included={feature.included}>
                      {feature.text}
                    </PlanFeature>
                  ))}
                </PlanFeatures>
              </PlanCard>
            ))}
          </PlanSelectionContainer>
          
          {selectedPlan && (
            <PaymentComponent 
              planType={selectedPlan.id}
              planPrice={isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice}
              planName={selectedPlan.name}
            />
          )}
        </>
      )}
    </PaymentPageContainer>
  );
};

export default PaymentPage;

