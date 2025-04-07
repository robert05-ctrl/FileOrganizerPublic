import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 0;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #3498db;
`;

const FooterLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const CompanyLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #3498db;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #ecf0f1;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(236, 240, 241, 0.1);
  font-size: 0.9rem;
  color: rgba(236, 240, 241, 0.6);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <CompanyLogo>FiletoFolder</CompanyLogo>
          <FooterText>
            파일 정리의 혁신, FiletoFolder는 복잡한 파일 관리를 간편하게 만들어 
            사용자의 생산성을 향상시키는 솔루션을 제공합니다.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>제품</FooterTitle>
          <FooterLink href="#">기능</FooterLink>
          <FooterLink href="#">요금제</FooterLink>
          <FooterLink href="#">다운로드</FooterLink>
          <FooterLink href="#">업데이트</FooterLink>
          <FooterLink href="#">베타 프로그램</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>회사</FooterTitle>
          <FooterLink href="#">소개</FooterLink>
          <FooterLink href="#">팀</FooterLink>
          <FooterLink href="#">채용</FooterLink>
          <FooterLink href="#">블로그</FooterLink>
          <FooterLink href="#">언론 보도</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>지원</FooterTitle>
          <FooterLink href="#">도움말 센터</FooterLink>
          <FooterLink href="#">문의하기</FooterLink>
          <FooterLink href="#">커뮤니티</FooterLink>
          <FooterLink href="#">개발자 API</FooterLink>
          <FooterLink href="#">상태</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© {new Date().getFullYear()} FiletoFolder. 모든 권리 보유.</p>
        <p>이용약관 | 개인정보처리방침 | 쿠키 정책</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
