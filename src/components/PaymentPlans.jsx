import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PlansContainer = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const PlansHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PlansTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const PlansDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const PlanToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
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

const ToggleButton = styled(motion.div)`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PlanCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  ${props => props.featured && `
    border: 2px solid #3498db;
    transform: scale(1.05);
    
    &:hover {
      transform: translateY(-5px) scale(1.05);
    }
  `}
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

const PlanButton = styled.button`
  background-color: ${props => props.featured ? '#3498db' : 'transparent'};
  color: ${props => props.featured ? 'white' : '#3498db'};
  border: 2px solid #3498db;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.featured ? '#2980b9' : 'rgba(52, 152, 219, 0.1)'};
  }
`;

const PaymentPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const navigate = useNavigate();
  
  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };
  
  const plans = [
    {
      name: 'Basic',
      badge: '',
      featured: false,
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
      name: 'Standard',
      badge: '인기',
      featured: true,
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
      name: 'Plus',
      badge: '',
      featured: false,
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
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
      .format(price)
      .replace('₩', '');
  };
  
  return (
    <PlansContainer id="plans">
      <PlansHeader>
        <PlansTitle>요금제 선택</PlansTitle>
        <PlansDescription>
          필요에 맞는 요금제를 선택하여 파일 정리의 효율성을 경험해보세요.
          모든 요금제는 14일 무료 체험 기간을 제공합니다.
        </PlansDescription>
        
        <PlanToggle>
          <ToggleOption active={!isYearly}>월간 결제</ToggleOption>
          <ToggleSwitch onClick={toggleBilling}>
            <ToggleButton
              animate={{ x: isYearly ? 30 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </ToggleSwitch>
          <ToggleOption active={isYearly}>연간 결제 (20% 할인)</ToggleOption>
        </PlanToggle>
      </PlansHeader>
      
      <PlansGrid>
      {plans.map((plan) => (
  <PlanCard 
    key={plan.id} 
    selected={selectedPlanId === plan.id}
    onClick={() => setSelectedPlanId(plan.id)}
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
    <PlanButton 
      selected={selectedPlanId === plan.id}
      onClick={(e) => {
        e.stopPropagation(); // Prevent the card's onClick from re-triggering
        if (selectedPlanId === plan.id) {
          // Navigate to PaymentPage with the selected plan details
          navigate('/payment', { state: { selectedPlan: plan, billing: isYearly ? 'yearly' : 'monthly' } });
        }
      }}
    >
      {selectedPlanId === plan.id ? '지금 시작하기' : '선택하기'}
    </PlanButton>
  </PlanCard>
))}


      </PlansGrid>
    </PlansContainer>
  );
};

export default PaymentPlans;
