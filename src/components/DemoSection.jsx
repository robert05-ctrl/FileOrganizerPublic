import React from 'react';
import styled from 'styled-components';
import FileToFolderSwiper from './FileToFolderSwiper';

const DemoSectionContainer = styled.section`
  padding: 3rem 0;
  background-color: #f9f9f9;
`;

const DemoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const DemoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const DemoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DemoItemReverse = styled(DemoItem)`
  flex-direction: row-reverse;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DemoText = styled.div`
  flex: 1;
`;

const DemoMedia = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const DemoVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const DemoImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const DemoHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const DemoDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

const DemoSection = () => {
  return (
    <DemoSectionContainer>
      <DemoTitle>FiletoFolder가 작동하는 방식</DemoTitle>
      <DemoContent>
        <DemoItem>
          <DemoText>
            <DemoHeading>간편한 파일 정리</DemoHeading>
            <DemoDescription>
              FiletoFolder는 복잡하게 흩어져 있는 파일들을 자동으로 분석하여 적절한 폴더에 정리해줍니다. 
              더 이상 파일을 찾기 위해 시간을 낭비하지 마세요. 단 몇 번의 클릭만으로 모든 파일이 
              체계적으로 정리됩니다.
            </DemoDescription>
          </DemoText>
          <DemoMedia>
            <DemoVideo controls>
              <source src="/videos/file-organization-demo.mp4" type="video/mp4" />
              브라우저가 비디오를 지원하지 않습니다.
            </DemoVideo>
          </DemoMedia>
        </DemoItem>
        
        <DemoItemReverse>
          <DemoText>
            <DemoHeading>스마트한 분류 시스템</DemoHeading>
            <DemoDescription>
              고급 알고리즘을 통해 파일의 내용, 형식, 메타데이터를 분석하여 최적의 분류 방식을 
              제안합니다. 사용자 패턴을 학습하여 시간이 지날수록 더 정확한 분류가 가능해집니다.
              개인 맞춤형 폴더 구조로 작업 효율성을 극대화하세요.
            </DemoDescription>
          </DemoText>
          <DemoMedia>
            <DemoImage src="/images/smart-classification.jpg" alt="스마트 분류 시스템" />
          </DemoMedia>
        </DemoItemReverse>
        
        <DemoItem>
          <DemoText>
            <DemoHeading>다양한 기기 지원</DemoHeading>
            <DemoDescription>
              데스크톱, 노트북, 태블릿 등 다양한 기기에서 FiletoFolder를 사용할 수 있습니다.
              클라우드 동기화를 통해 어디서든 일관된 파일 구조를 유지하세요.
              모든 기기에서 동일한 폴더 구조로 작업할 수 있어 효율성이 높아집니다.
            </DemoDescription>
          </DemoText>
          <DemoMedia>
            <DemoVideo controls>
              <source src="/videos/multi-device-demo.mp4" type="video/mp4" />
              브라우저가 비디오를 지원하지 않습니다.
            </DemoVideo>
          </DemoMedia>
        </DemoItem>
      </DemoContent>
    </DemoSectionContainer>
  );
};

export default DemoSection;
