import React from 'react';
import styled from 'styled-components';
import FileToFolderSwiper from '../components/FileToFolderSwiper';
import DemoSection from '../components/DemoSection';
import PaymentPlans from '../components/PaymentPlans';

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButton = styled.button`
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

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const FeaturesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #3498db;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const TestimonialSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`;

const TestimonialContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: #3498db;
  font-size: 1.5rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.2rem;
`;

const AuthorRole = styled.div`
  font-size: 0.9rem;
  color: #666;
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

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>파일 정리의 혁신, FiletoFolder</HeroTitle>
          <HeroSubtitle>
            복잡하게 흩어진 파일들을 자동으로 정리하고 관리하세요.
            FiletoFolder가 당신의 디지털 공간을 깔끔하게 만들어 드립니다.
          </HeroSubtitle>
          <HeroButton>무료로 시작하기</HeroButton>
        </HeroContent>
      </HeroSection>
      
      <FileToFolderSwiper />
      
      <DemoSection />
      
      <FeaturesSection>
        <FeaturesContent>
          <FeaturesTitle>주요 기능</FeaturesTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureTitle>스마트 분류</FeatureTitle>
              <FeatureDescription>
                AI 기반 알고리즘이 파일의 내용과 형식을 분석하여 최적의 폴더 구조를 자동으로 생성합니다.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureTitle>빠른 처리 속도</FeatureTitle>
              <FeatureDescription>
                수천 개의 파일도 몇 분 안에 정리 완료. 대용량 파일 처리에도 최적화된 성능을 제공합니다.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>자동 동기화</FeatureTitle>
              <FeatureDescription>
                여러 기기에서 동일한 폴더 구조를 유지하고, 클라우드 서비스와 원활하게 연동됩니다.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🔒</FeatureIcon>
              <FeatureTitle>안전한 보안</FeatureTitle>
              <FeatureDescription>
                모든 파일은 암호화되어 처리되며, 사용자의 개인정보를 철저히 보호합니다.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureTitle>상세 통계</FeatureTitle>
              <FeatureDescription>
                파일 사용 패턴과 저장 공간 활용에 대한 인사이트를 제공하여 효율적인 관리를 돕습니다.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>⚙️</FeatureIcon>
              <FeatureTitle>맞춤 설정</FeatureTitle>
              <FeatureDescription>
                사용자의 필요에 맞게 폴더 구조와 정리 규칙을 세부적으로 커스터마이징할 수 있습니다.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContent>
      </FeaturesSection>
      
      <PaymentPlans />
      
      <TestimonialSection>
        <TestimonialContent>
          <TestimonialTitle>사용자 후기</TestimonialTitle>
          <TestimonialGrid>
            <TestimonialCard>
              <TestimonialText>
                "FiletoFolder를 사용하기 전에는 매일 파일 찾기에 30분 이상을 소비했어요. 이제는 모든 것이 완벽하게 정리되어 있어 업무 효율성이 크게 향상되었습니다."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>👩</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>김지영</AuthorName>
                  <AuthorRole>마케팅 매니저</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialText>
                "디자이너로서 수많은 프로젝트 파일을 관리하는 것이 항상 고민이었는데, FiletoFolder가 이 문제를 완벽하게 해결해주었어요. 정말 추천합니다!"
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>👨</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>이준호</AuthorName>
                  <AuthorRole>그래픽 디자이너</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialText>
                "학생으로서 과제와 연구 자료를 체계적으로 관리하는 것이 중요한데, FiletoFolder 덕분에 모든 것이 쉬워졌어요. 특히 자동 분류 기능이 정말 유용합니다."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>👩</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>박소연</AuthorName>
                  <AuthorRole>대학원생</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialGrid>
        </TestimonialContent>
      </TestimonialSection>
      
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
    </HomeContainer>
  );
};

export default HomePage;
