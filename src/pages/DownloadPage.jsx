import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import PaymentPage from './PaymentPage';

const DownloadPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const DownloadHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const DownloadTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const DownloadDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const DownloadCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const LicenseInfo = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const LicenseTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const LicenseKey = styled.code`
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.8rem;
  margin: 1rem 0;
  font-family: monospace;
  word-break: break-all;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const InstructionCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const InstructionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

const InstructionList = styled.ol`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const InstructionItem = styled.li`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #555;
`;

const DownloadPage = () => {
  // In a real app, you would fetch this from localStorage or your backend
  const licenseKey = localStorage.getItem('licenseKey') || 'XXXX-XXXX-XXXX-XXXX';
  
  // This would be the actual download URL from your backend
  const downloadUrl = 'https://example.com/download/filetofolder.exe';
  
  return (
    <DownloadPageContainer>
      <DownloadHeader>
        <DownloadTitle>FiletoFolder 다운로드</DownloadTitle>
        <DownloadDescription>
          구매해 주셔서 감사합니다! 아래에서 FiletoFolder를 다운로드하고 라이센스 키로 활성화하세요.
        </DownloadDescription>
      </DownloadHeader>
      
      <DownloadCard>
        <LicenseInfo>
          <LicenseTitle>라이센스 키</LicenseTitle>
          <p>아래 라이센스 키를 사용하여 FiletoFolder를 활성화하세요.</p>
          <LicenseKey>{licenseKey}</LicenseKey>
          <p>이 라이센스 키는 구매하신 플랜에 따라 사용 가능한 기기 수가 제한됩니다.</p>
        </LicenseInfo>
        
        <div style={{ textAlign: 'center' }}>
          <DownloadButton href={downloadUrl} download>
            FiletoFolder 다운로드
          </DownloadButton>
        </div>
      </DownloadCard>
      
      <InstructionCard>
        <InstructionTitle>설치 및 활성화 방법</InstructionTitle>
        <InstructionList>
          <InstructionItem>
            다운로드한 설치 파일을 실행하세요.
          </InstructionItem>
          <InstructionItem>
            설치 마법사의 안내에 따라 FiletoFolder를 설치하세요.
          </InstructionItem>
          <InstructionItem>
            프로그램을 처음 실행하면 라이센스 키 입력 창이 나타납니다.
          </InstructionItem>
          <InstructionItem>
            위에 표시된 라이센스 키를 입력하고 '활성화' 버튼을 클릭하세요.
          </InstructionItem>
          <InstructionItem>
            활성화가 완료되면 FiletoFolder의 모든 기능을 사용할 수 있습니다.
          </InstructionItem>
        </InstructionList>
        
        <p>
          설치나 활성화 과정에서 문제가 발생하면 <a href="mailto:support@filetofolder.com">support@filetofolder.com</a>으로 문의해 주세요.
        </p>
      </InstructionCard>
    </DownloadPageContainer>
  );
};

export default DownloadPage;
