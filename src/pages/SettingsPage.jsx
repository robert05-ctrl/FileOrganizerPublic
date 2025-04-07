import React, { useState } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const SettingsHeader = styled.div`
  margin-bottom: 2rem;
`;

const SettingsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const SettingsDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SettingsSidebar = styled.div`
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

const SettingsContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`;

const SettingsSection = styled.div`
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

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const FormCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FormCheckbox = styled.input`
  margin-right: 0.8rem;
  cursor: pointer;
`;

const DeviceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DeviceItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DeviceInfo = styled.div`
  display: flex;
  align-items: center;
`;

const DeviceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: #3498db;
  font-size: 1.2rem;
`;

const DeviceDetails = styled.div``;

const DeviceName = styled.div`
  font-weight: 500;
  margin-bottom: 0.2rem;
`;

const DeviceStatus = styled.div`
  font-size: 0.9rem;
  color: ${props => props.active ? '#27ae60' : '#666'};
`;

const DeviceActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const DeviceButton = styled.button`
  background-color: ${props => props.danger ? '#f8f9fa' : '#f0f7ff'};
  color: ${props => props.danger ? '#e74c3c' : '#3498db'};
  border: 1px solid ${props => props.danger ? '#e74c3c' : '#3498db'};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.danger ? '#fee' : '#e6f3ff'};
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
`;

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('devices');
  
  const devices = [
    { id: 1, name: '내 맥북 프로', type: 'laptop', active: true, lastActive: '방금 전' },
    { id: 2, name: '회사 데스크톱', type: 'desktop', active: false, lastActive: '3시간 전' },
    { id: 3, name: '아이패드', type: 'tablet', active: false, lastActive: '어제' },
    { id: 4, name: '갤럭시 S22', type: 'mobile', active: false, lastActive: '2일 전' }
  ];
  
  const getDeviceIcon = (type) => {
    switch (type) {
      case 'laptop':
        return '💻';
      case 'desktop':
        return '🖥️';
      case 'tablet':
        return '📱';
      case 'mobile':
        return '📱';
      default:
        return '📱';
    }
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'devices':
        return (
          <SettingsSection>
            <SectionTitle>기기 관리</SectionTitle>
            <p>FiletoFolder를 사용 중인 기기를 관리하세요. 현재 구독에서는 최대 5개의 기기를 연결할 수 있습니다.</p>
            
            <DeviceList>
              {devices.map(device => (
                <DeviceItem key={device.id}>
                  <DeviceInfo>
                    <DeviceIcon>{getDeviceIcon(device.type)}</DeviceIcon>
                    <DeviceDetails>
                      <DeviceName>{device.name}</DeviceName>
                      <DeviceStatus active={device.active}>
                        {device.active ? '현재 활성화됨' : `마지막 활동: ${device.lastActive}`}
                      </DeviceStatus>
                    </DeviceDetails>
                  </DeviceInfo>
                  <DeviceActions>
                    <DeviceButton>이름 변경</DeviceButton>
                    <DeviceButton danger>연결 해제</DeviceButton>
                  </DeviceActions>
                </DeviceItem>
              ))}
            </DeviceList>
            
            <ButtonGroup>
              <Button>새 기기 추가</Button>
            </ButtonGroup>
          </SettingsSection>
        );
      
      case 'preferences':
        return (
          <SettingsSection>
            <SectionTitle>파일 정리 환경설정</SectionTitle>
            
            <FormGroup>
              <FormLabel>기본 정리 방식</FormLabel>
              <FormSelect>
                <option value="auto">자동 (AI 추천)</option>
                <option value="type">파일 유형별</option>
                <option value="date">날짜별</option>
                <option value="size">크기별</option>
                <option value="name">이름별</option>
              </FormSelect>
            </FormGroup>
            
            <FormGroup>
              <FormLabel>자동 정리 주기</FormLabel>
              <FormSelect>
                <option value="never">수동으로만 실행</option>
                <option value="daily">매일</option>
                <option value="weekly">매주</option>
                <option value="monthly">매월</option>
              </FormSelect>
            </FormGroup>
            
            <FormGroup>
              <FormLabel>정리 대상 폴더</FormLabel>
              <FormCheckboxGroup>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" defaultChecked />
                  다운로드 폴더
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" defaultChecked />
                  바탕화면
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" />
                  문서 폴더
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" />
                  사진 폴더
                </FormCheckboxLabel>
              </FormCheckboxGroup>
            </FormGroup>
            
            <ButtonGroup>
              <Button>취소</Button>
              <Button primary>저장</Button>
            </ButtonGroup>
          </SettingsSection>
        );
      
      case 'notifications':
        return (
          <SettingsSection>
            <SectionTitle>알림 설정</SectionTitle>
            
            <FormGroup>
              <FormLabel>알림 수신 방법</FormLabel>
              <FormCheckboxGroup>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" defaultChecked />
                  앱 내 알림
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" defaultChecked />
                  이메일 알림
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" />
                  푸시 알림
                </FormCheckboxLabel>
              </FormCheckboxGroup>
            </FormGroup>
            
            <FormGroup>
              <FormLabel>알림 유형</FormLabel>
              <FormCheckboxGroup>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" defaultChecked />
                  파일 정리 완료
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" defaultChecked />
                  구독 갱신 및 결제
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" defaultChecked />
                  새로운 기능 및 업데이트
                </FormCheckboxLabel>
                <FormCheckboxLabel>
                  <FormCheckbox type="checkbox" />
                  마케팅 및 프로모션
                </FormCheckboxLabel>
              </FormCheckboxGroup>
            </FormGroup>
            
            <ButtonGroup>
              <Button>취소</Button>
              <Button primary>저장</Button>
            </ButtonGroup>
          </SettingsSection>
        );
      
      case 'security':
        return (
          <SettingsSection>
            <SectionTitle>보안 설정</SectionTitle>
            
            <FormGroup>
              <FormLabel>비밀번호 변경</FormLabel>
              <FormInput type="password" placeholder="현재 비밀번호" />
            </FormGroup>
            
            <FormGroup>
              <FormInput type="password" placeholder="새 비밀번호" />
            </FormGroup>
            
            <FormGroup>
              <FormInput type="password" placeholder="새 비밀번호 확인" />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>2단계 인증</FormLabel>
              <FormCheckboxLabel>
                <FormCheckbox type="checkbox" />
                2단계 인증 활성화
              </FormCheckboxLabel>
            </FormGroup>
            
            <ButtonGroup>
              <Button>취소</Button>
              <Button primary>저장</Button>
            </ButtonGroup>
          </SettingsSection>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <SettingsContainer>
      <SettingsHeader>
        <SettingsTitle>설정</SettingsTitle>
        <SettingsDescription>
          FiletoFolder 앱의 설정을 관리하고 사용자 경험을 커스터마이징하세요.
        </SettingsDescription>
      </SettingsHeader>
      
      <SettingsGrid>
        <SettingsSidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'devices'} 
                onClick={() => setActiveTab('devices')}
              >
                기기 관리
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'preferences'} 
                onClick={() => setActiveTab('preferences')}
              >
                환경설정
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'notifications'} 
                onClick={() => setActiveTab('notifications')}
              >
                알림 설정
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink 
                active={activeTab === 'security'} 
                onClick={() => setActiveTab('security')}
              >
                보안
              </SidebarMenuLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SettingsSidebar>
        
        <SettingsContent>
          {renderTabContent()}
        </SettingsContent>
      </SettingsGrid>
    </SettingsContainer>
  );
};

export default SettingsPage;
