import React from 'react';
import styled from 'styled-components';
import PaymentPlans from '../components/PaymentPlans';

const PlansContainer = styled.div`
  width: 100%;
`;

const PlansHero = styled.section`
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
`;

const PlansHeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PlansHeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PlansHeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ComparisonSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`;

const ComparisonContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ComparisonTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ComparisonTable = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  background-color: #3498db;
  color: white;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TableHeaderCell = styled.div`
  padding: 1.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  
  &:first-child {
    text-align: left;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    border-bottom: none;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
`;

const TableCell = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: #333;
  
  &:first-child {
    text-align: left;
    font-weight: 600;
    background-color: #f8f9fa;
  }
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    border-bottom: 1px solid #eee;
    
    &:before {
      content: attr(data-label);
      font-weight: 600;
      text-align: left;
    }
    
    &:first-child {
      background-color: #3498db;
      color: white;
      justify-content: center;
      
      &:before {
        content: none;
      }
    }
  }
`;

const CheckIcon = styled.span`
  color: #27ae60;
  font-size: 1.5rem;
`;

const CrossIcon = styled.span`
  color: #e74c3c;
  font-size: 1.5rem;
`;

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const FAQContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 1.5rem;
  background-color: #f8f9fa;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FAQAnswer = styled.div`
  padding: 1.5rem;
  color: #555;
  line-height: 1.6;
  border-top: 1px solid #eee;
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background-color: white;
  color: #3498db;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const PlansPage = () => {
  return (
    <PlansContainer>
      <PlansHero>
        <PlansHeroContent>
          <PlansHeroTitle>요금제 비교</PlansHeroTitle>
          <PlansHeroSubtitle>
            필요에 맞는 요금제를 선택하여 파일 정리의 효율성을 경험해보세요.
            모든 요금제는 14일 무료 체험 기간을 제공합니다.
          </PlansHeroSubtitle>
        </PlansHeroContent>
      </PlansHero>
      
      <PaymentPlans />
      
      <ComparisonSection>
        <ComparisonContent>
          <ComparisonTitle>요금제 기능 비교</ComparisonTitle>
          <ComparisonTable>
            <TableHeader>
              <TableHeaderCell>기능</TableHeaderCell>
              <TableHeaderCell>Basic</TableHeaderCell>
              <TableHeaderCell>Standard</TableHeaderCell>
              <TableHeaderCell>Plus</TableHeaderCell>
            </TableHeader>
            
            <TableRow>
              <TableCell data-label="기능">파일 정리 기능</TableCell>
              <TableCell data-label="Basic">기본</TableCell>
              <TableCell data-label="Standard">고급</TableCell>
              <TableCell data-label="Plus">모든 기능</TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell data-label="기능">최대 파일 처리</TableCell>
              <TableCell data-label="Basic">1,000개</TableCell>
              <TableCell data-label="Standard">10,000개</TableCell>
              <TableCell data-label="Plus">무제한</TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell data-label="기능">지원 기기 수</TableCell>
              <TableCell data-label="Basic">1개</TableCell>
              <TableCell data-label="Standard">3개</TableCell>
              <TableCell data-label="Plus">무제한</TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell data-label="기능">고급 분류 알고리즘</TableCell>
              <TableCell data-label="Basic"><CrossIcon>✕</CrossIcon></TableCell>
              <TableCell data-label="Standard"><CheckIcon>✓</CheckIcon></TableCell>
              <TableCell data-label="Plus"><CheckIcon>✓</CheckIcon></TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell data-label="기능">클라우드 백업</TableCell>
              <TableCell data-label="Basic"><CrossIcon>✕</CrossIcon></TableCell>
              <TableCell data-label="Standard"><CrossIcon>✕</CrossIcon></TableCell>
              <TableCell data-label="Plus"><CheckIcon>✓</CheckIcon></TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell data-label="기능">자동 정리 스케줄링</TableCell>
              <TableCell data-label="Basic"><CrossIcon>✕</CrossIcon></TableCell>
              <TableCell data-label="Standard"><CrossIcon>✕</CrossIcon></TableCell>
              <TableCell data-label="Plus"><CheckIcon>✓</CheckIcon></TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell data-label="기능">고객 지원</TableCell>
              <TableCell data-label="Basic">이메일</TableCell>
              <TableCell data-label="Standard">이메일 및 채팅</TableCell>
              <TableCell data-label="Plus">우선 지원 (24/7)</TableCell>
            </TableRow>
          </ComparisonTable>
        </ComparisonContent>
      </ComparisonSection>
      
      <FAQSection>
        <FAQContent>
          <FAQTitle>자주 묻는 질문</FAQTitle>
          
          <FAQItem>
            <FAQQuestion>
              무료 체험 기간은 어떻게 작동하나요?
            </FAQQuestion>
            <FAQAnswer>
              모든 요금제는 14일 무료 체험 기간을 제공합니다. 체험 기간 동안 선택한 요금제의 모든 기능을 제한 없이 사용할 수 있으며, 만족하지 않으시면 언제든지 취소할 수 있습니다. 체험 기간이 끝나면 자동으로 선택한 요금제로 전환되며 결제가 진행됩니다.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>
              요금제를 언제든지 변경할 수 있나요?
            </FAQQuestion>
            <FAQAnswer>
              네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 업그레이드의 경우 즉시 적용되며, 남은 기간에 대한 차액만 결제됩니다. 다운그레이드의 경우 현재 구독 기간이 끝난 후 다음 결제 시점부터 적용됩니다.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>
              환불 정책은 어떻게 되나요?
            </FAQQuestion>
            <FAQAnswer>
              첫 결제 후 30일 이내에 요청하시면 전액 환불이 가능합니다. 30일이 지난 후에는 부분 환불이 적용될 수 있으며, 연간 구독의 경우 미사용 기간에 대한 비례 환불이 제공됩니다. 환불 요청은 고객 지원 센터를 통해 접수해 주세요.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>
              기업용 요금제도 있나요?
            </FAQQuestion>
            <FAQAnswer>
              네, 10명 이상의 사용자를 위한 기업용 요금제를 제공하고 있습니다. 기업용 요금제는 중앙 관리 콘솔, 고급 보안 기능, 전담 고객 지원 등 추가 기능을 포함합니다. 자세한 내용은 영업팀에 문의해 주세요.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>
              결제 방법은 어떤 것을 지원하나요?
            </FAQQuestion>
            <FAQAnswer>
              신용카드(Visa, MasterCard, AMEX), 체크카드, PayPal, 그리고 일부 국가에서는 계좌 이체를 지원합니다. 기업 고객의 경우 인보이스 결제도 가능합니다.
            </FAQAnswer>
          </FAQItem>
        </FAQContent>
      </FAQSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>지금 바로 시작하세요</CTATitle>
          <CTADescription>
            14일 무료 체험으로 FiletoFolder의 모든 기능을 경험해보세요.
            복잡한 파일 관리의 스트레스에서 벗어나 생산성을 높이는 첫 걸음을 내딛으세요.
          </CTADescription>
          <CTAButton>무료 체험 시작하기</CTAButton>
        </CTAContent>
      </CTASection>
    </PlansContainer>
  );
};

export default PlansPage;
