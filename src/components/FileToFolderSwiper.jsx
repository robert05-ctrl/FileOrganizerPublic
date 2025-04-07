import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthenticator } from '@aws-amplify/ui-react';

// Import SVG images
import unsortedFilesImage from '../assets/images/unsorted-files.svg';
import sortedFoldersImage from '../assets/images/sorted-folders.svg';

const SwiperContainer = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: 2rem 0;
`;

const SwiperSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-size: cover;
  background-position: center;
  padding: 2rem;
  text-align: center;
`;

const SlideContent = styled.div`
  max-width: 800px;
  z-index: 2;
`;

const SlideTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const SwiperDots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  z-index: 3;
`;

const SwiperDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
  }
`;

const ActionButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background-color: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SwipeInstruction = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  color: white;
  font-size: 2rem;
  animation: pulse 2s infinite;
  z-index: 3;
  
  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FileToFolderSwiper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { authStatus, user } = useAuthenticator(context => [context.authStatus, context.user]);
  const [hasLicense, setHasLicense] = useState(false);
  
  useEffect(() => {
    // Check if user has a license key stored
    const storedLicenseKey = localStorage.getItem('licenseKey');
    setHasLicense(!!storedLicenseKey);
  }, []);
  
  const slides = [
    {
      title: "복잡한 파일들",
      description: "정리되지 않은 파일들로 인해 중요한 문서를 찾는 데 시간을 낭비하고 계신가요?",
      image: unsortedFilesImage,
      buttonText: authStatus === 'authenticated' 
        ? (hasLicense ? "다운로드" : "구매하기") 
        : "시작하기",
      buttonLink: authStatus === 'authenticated' 
        ? (hasLicense ? "/download" : "/plans") 
        : "/login"
    },
    {
      title: "정리된 폴더",
      description: "FiletoFolder가 모든 파일을 자동으로 분류하고 정리하여 작업 효율성을 높여드립니다.",
      image: sortedFoldersImage,
      buttonText: authStatus === 'authenticated' 
        ? (hasLicense ? "다운로드" : "구매하기") 
        : "시작하기",
      buttonLink: authStatus === 'authenticated' 
        ? (hasLicense ? "/download" : "/plans") 
        : "/login"
    }
  ];
  
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1)),
    onSwipedRight: () => setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  
  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  
  const handleButtonClick = (link) => {
    // In a real app, this would navigate to the specified link
    window.location.href = link;
  };
  
  return (
    <SwiperContainer {...handlers}>
      <AnimatePresence initial={false}>
        <SwiperSlide
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SlideImage image={slides[activeSlide].image} />
          <SlideOverlay />
          <SlideContent>
            <SlideTitle>{slides[activeSlide].title}</SlideTitle>
            <SlideDescription>{slides[activeSlide].description}</SlideDescription>
            <ActionButton onClick={() => handleButtonClick(slides[activeSlide].buttonLink)}>
              {slides[activeSlide].buttonText}
            </ActionButton>
          </SlideContent>
        </SwiperSlide>
      </AnimatePresence>
      
      <SwiperDots>
        {slides.map((_, index) => (
          <SwiperDot 
            key={index} 
            active={index === activeSlide} 
            onClick={() => handleDotClick(index)}
          />
        ))}
      </SwiperDots>
      
      <SwipeInstruction>
        <span>👉</span>
      </SwipeInstruction>
    </SwiperContainer>
  );
};

export default FileToFolderSwiper;
