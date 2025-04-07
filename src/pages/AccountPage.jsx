import React, { useState } from 'react';
import styled from 'styled-components';

const AccountContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const AccountHeader = styled.div`
  margin-bottom: 2rem;
`;

const AccountTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const AccountDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const AccountGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AccountSidebar = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const SidebarMenuItem = styled.li`
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SidebarMenuLink = styled.button`
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: left;
  background-color: ${props => props.active ? '#f0f7ff' : 'transparent'};
  color: ${props => props.active ? '#3498db' : '#333'};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#f0f7ff' : '#f9f9f9'};
  }
  
  &:focus {
    outline: none;
  }
`;

const AccountContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`;

const AccountSection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  color: #3498db;
  font-size: 2.5rem;
  overflow: hidden;
`;

const ProfileImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const UploadButton = styled.label`
  display: inline-block;
  background-color: #f0f7ff;
  color: #3498db;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e6f3ff;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadNote = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const SubscriptionCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SubscriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SubscriptionName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

const SubscriptionBadge = styled.span`
  background-color: #3498db;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const SubscriptionDetails = styled.div`
  margin-bottom: 1rem;
`;

const SubscriptionDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  color: #666;
`;

const DetailValue = styled.span`
  font-weight: 500;
  color: #333;
`;

const SubscriptionActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const PaymentMethodCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PaymentMethodInfo = styled.div`
  display: flex;
  align-items: center;
`;

const PaymentMethodIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #f0f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: #3498db;
  font-size: 1.2rem;
`;

const PaymentMethodDetails = styled.div``;

const PaymentMethodName = styled.div`
  font-weight: 500;
  margin-bottom: 0.2rem;
`;

const PaymentMethodNumber = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const PaymentMethodActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const InvoiceList = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const InvoiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const InvoiceInfo = styled.div``;

const InvoiceDate = styled.div`
  font-weight: 500;
  margin-bottom: 0.2rem;
`;

const InvoiceAmount = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const InvoiceStatus = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background-color: ${props => {
    switch (props.status) {
      case 'paid':
        return '#e6f7ee';
      case 'pending':
        return '#fff8e6';
      case 'failed':
        return '#fee';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'paid':
        return '#27ae60';
      case 'pending':
        return '#f39c12';
      case 'failed':
        return '#e74c3c';
      default:
        return '#666';
    }
  }};
`;

const InvoiceAction = styled.a`
  color: #3498db;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  background-color: ${props => props.primary ? '#3498db' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#333'};
  border: ${props => props.primary ? 'none' : '1px solid #ddd'};
  
  &:hover {
    background-color: ${props => props.primary ? '#2980b9' : '#f5f5f5'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const DangerButton = styled(Button)`
  color: #e74c3c;
  border-color: #e74c3c;
  
  &:hover {
    background-color: #fee;
  }
`;

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <AccountSection>
            <SectionTitle>프로필 정보</SectionTitle>
            
            <ProfileImageContainer>
              <ProfileImage>
                <span>👤</span>
              </ProfileImage>
              <ProfileImageUpload>
                <UploadButton>
                  프로필 이미지 변경
                  <UploadInput type="file" accept="image/*" />
                </UploadButton>
                <UploadNote>JPG, PNG 또는 GIF 파일, 최대 5MB</UploadNote>
              </ProfileImageUpload>
            </ProfileImageContainer>
            
            <FormGroup>
              <FormLabel>이름</FormLabel>
              <FormInput type="text" defaultValue="홍길동" />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>이메일</FormLabel>
              <FormInput type="email" defaultValue="hong@example.com" />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>전화번호</FormLabel>
              <FormInput type="tel" defaultValue="010-1234-5678" />
            </FormGroup>
            
            <ButtonGroup>
              <Button>취소</Button>
              <Button primary>저장</Button>
            </ButtonGroup>
          </AccountSection>
        );
      
      case 'subscription':
        return (
          <AccountSection>
            <SectionTitle>구독 관리</SectionTitle>
            
            <SubscriptionCard>
              <SubscriptionHeader>
                <SubscriptionName>Standard 플랜</SubscriptionName>
                <SubscriptionBadge>활성</SubscriptionBadge>
              </SubscriptionHeader>
              
              <SubscriptionDetails>
                <SubscriptionDetail>
                  <DetailLabel>구독 시작일</DetailLabel>
                  <DetailValue>2025년 3월 15일</DetailValue>
                </SubscriptionDetail>
                <SubscriptionDetail>
                  <DetailLabel>다음 결제일</DetailLabel>
                  <DetailValue>2025년 4월 15일</DetailValue>
                </SubscriptionDetail>
                <SubscriptionDetail>
                  <DetailLabel>결제 금액</DetailLabel>
                  <DetailValue>₩19,900 / 월</DetailValue>
                </SubscriptionDetail>
                <SubscriptionDetail>
                  <DetailLabel>상태</DetailLabel>
                  <DetailValue>자동 갱신</DetailValue>
                </SubscriptionDetail>
              </SubscriptionDetails>
              
              <SubscriptionActions>
                <Button>플랜 변경</Button>
                <DangerButton>구독 취소</DangerButton>
              </SubscriptionActions>
            </SubscriptionCard>
          </AccountSection>
        );
      
      case 'payment':
        return (
          <AccountSection>
            <SectionTitle>결제 수단</SectionTitle>
            
            <PaymentMethodCard>
              <PaymentMethodInfo>
                <PaymentMethodIcon>💳</PaymentMethodIcon>
                <PaymentMethodDetails>
                  <PaymentMethodName>신한카드</PaymentMethodName>
                  <PaymentMethodNumber>**** **** **** 1234</PaymentMethodNumber>
                </PaymentMethodDetails>
              </PaymentMethodInfo>
              <PaymentMethodActions>
                <Button>기본 카드로 설정</Button>
                <DangerButton>삭제</DangerButton>
              </PaymentMethodActions>
            </PaymentMethodCard>
            
            <PaymentMethodCard>
              <PaymentMethodInfo>
                <PaymentMethodIcon>💳</PaymentMethodIcon>
                <PaymentMethodDetails>
                  <PaymentMethodName>국민카드</PaymentMethodName>
                  <PaymentMethodNumber>**** **** **** 5678</PaymentMethodNumber>
                </PaymentMethodDetails>
              </PaymentMethodInfo>
              <PaymentMethodActions>
                <Button>기본 카드로 설정</Button>
                <DangerButton>삭제</DangerButton>
              </PaymentMethodActions>
            </PaymentMethodCard>
            
            <ButtonGroup>
              <Button primary>새 결제 수단 추가</Button>
            </ButtonGroup>
          </AccountSection>
        );
      
      case 'invoices':
        return (
          <AccountSection>
            <SectionTitle>결제 내역</SectionTitle>
            
            <InvoiceList>
              <InvoiceItem>
                <InvoiceInfo>
                  <InvoiceDate>2025년 3월 15일</InvoiceDate>
                  <InvoiceAmount>₩19,900 - Standard 플랜</InvoiceAmount>
                </InvoiceInfo>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <InvoiceStatus status="paid">결제 완료</InvoiceStatus>
                  <InvoiceAction href="#">영수증</InvoiceAction>
                </div>
              </InvoiceItem>
              
              <InvoiceItem>
                <InvoiceInfo>
                  <InvoiceDate>2025년 2월 15일</InvoiceDate>
                  <InvoiceAmount>₩19,900 - Standard 플랜</InvoiceAmount>
                </InvoiceInfo>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <InvoiceStatus status="paid">결제 완료</InvoiceStatus>
                  <InvoiceAction href="#">영수증</InvoiceAction>
                </div>
              </InvoiceItem>
              
              <InvoiceItem>
                <InvoiceInfo>
                  <InvoiceDate>2025년 1월 15일</InvoiceDate>
                  <InvoiceAmount>₩19,900 - Standard 플랜</InvoiceAmount>
                </InvoiceInfo>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <InvoiceStatus status="paid">결제 완료</InvoiceStatus>
                  <InvoiceAction href="#">영수증</InvoiceAction>
                </div>
              </InvoiceItem>
            </InvoiceList>
          </AccountSection>
        );
      
      case 'delete':
        return (
          <AccountSection>
            <SectionTitle>계정 삭제</SectionTitle>
            
            <p>계정을 삭제하면 모든 데이터와 설정이 영구적으로 제거됩니다. 이 작업은 되돌릴 수 없습니다.</p>
            
            <FormGroup>
              <FormLabel>계정 삭제 확인</FormLabel>
              <FormInput type="text" placeholder="'삭제'를 입력하여 확인" />
            </FormGroup>
            
            <ButtonGroup>
              <DangerButton disabled>계정 삭제</DangerButton>
            </ButtonGroup>
          </AccountSection>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <AccountContainer>
      <AccountHeader>
        <AccountTitle>내 계정</AccountTitle>
        <AccountDescription>
          계정 정보, 구독 및 결제 설정을 관리하세요.
        </AccountDescription>
      </AccountHeader>
      
      <AccountGrid>
        <AccountSidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'profile'} 
                onClick={() => setActiveTab('profile')}
              >
                프로필 정보
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'subscription'} 
                onClick={() => setActiveTab('subscription')}
              >
                구독 관리
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'payment'} 
                onClick={() => setActiveTab('payment')}
              >
                결제 수단
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'invoices'} 
                onClick={() => setActiveTab('invoices')}
              >
                결제 내역
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'delete'} 
                onClick={() => setActiveTab('delete')}
              >
                계정 삭제
              </SidebarMenuLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </AccountSidebar>
        
        <AccountContent>
          {renderTabContent()}
        </AccountContent>
      </AccountGrid>
    </AccountContainer>
  );
};

export default AccountPage;
