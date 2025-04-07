import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #3498db;
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const NavButton = styled.button`
  background-color: ${props => props.primary ? '#3498db' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#333'};
  border: ${props => props.primary ? 'none' : '1px solid #ddd'};
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#2980b9' : '#f5f5f5'};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserEmail = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileNavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const Navbar = ({ isAuthenticated, userEmail, onSignOut }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasLicense, setHasLicense] = useState(false);
  
  useEffect(() => {
    // Check if user has a license key stored
    const storedLicenseKey = localStorage.getItem('licenseKey');
    setHasLicense(!!storedLicenseKey);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/">FiletoFolder</Logo>
        
        <NavLinks>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/plans">플랜</NavLink>
          
          {isAuthenticated ? (
            <>
              <NavLink to="/settings">설정</NavLink>
              <NavLink to="/account">계정</NavLink>
              {hasLicense && <NavLink to="/download">다운로드</NavLink>}
              <UserInfo>
                <UserEmail>{userEmail}</UserEmail>
                <NavButton onClick={onSignOut}>로그아웃</NavButton>
              </UserInfo>
            </>
          ) : (
            <>
              <NavButton onClick={() => document.querySelector('.amplify-button[data-variation="primary"]').click()}>로그인</NavButton>
              <NavButton primary onClick={() => document.querySelector('.amplify-tabs-item[data-value="sign-up"]').click()}>회원가입</NavButton>
            </>
          )}
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          <i className="fas fa-bars">☰</i>
        </MobileMenuButton>
      </NavContent>
      
      <Overlay isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileMenuHeader>
          <Logo to="/" onClick={toggleMobileMenu}>FiletoFolder</Logo>
          <CloseButton onClick={toggleMobileMenu}>
            <i className="fas fa-times">✕</i>
          </CloseButton>
        </MobileMenuHeader>
        
        <MobileNavLink to="/" onClick={toggleMobileMenu}>홈</MobileNavLink>
        <MobileNavLink to="/plans" onClick={toggleMobileMenu}>플랜</MobileNavLink>
        
        {isAuthenticated ? (
          <>
            <MobileNavLink to="/settings" onClick={toggleMobileMenu}>설정</MobileNavLink>
            <MobileNavLink to="/account" onClick={toggleMobileMenu}>계정</MobileNavLink>
            {hasLicense && <MobileNavLink to="/download" onClick={toggleMobileMenu}>다운로드</MobileNavLink>}
            <UserInfo>
              <UserEmail>{userEmail}</UserEmail>
            </UserInfo>
            <NavButton onClick={() => { onSignOut(); toggleMobileMenu(); }}>로그아웃</NavButton>
          </>
        ) : (
          <>
            <NavButton onClick={() => { document.querySelector('.amplify-button[data-variation="primary"]').click(); toggleMobileMenu(); }}>로그인</NavButton>
            <NavButton primary onClick={() => { document.querySelector('.amplify-tabs-item[data-value="sign-up"]').click(); toggleMobileMenu(); }}>회원가입</NavButton>
          </>
        )}
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
