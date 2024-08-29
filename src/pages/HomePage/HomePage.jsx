import {
  Header,
  PageLayout,
  DevtiCard,
  StackCard,
  Footer,
  ProjectsSection,
} from '../../components';
import * as S from './HomePage.style';

import { sendViewPageEvent } from '../../services';
import { useEffect } from 'react';

import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HomePage = () => {
  useEffect(() => {
    sendViewPageEvent('HOME_PAGE');
  }, []);

  const handleDevtiClick = () => {
    window.location.href = ('https://6yoon.github.io/');
  };

  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.Container>
        <S.MainSection>
          <S.MainSectionInner>
            <S.MainSectionTitle>
              Embedded Linux
              <br />
              EL에 오신것을
              <br />
              환영합니다.
            </S.MainSectionTitle>
            <S.MainSectionSubTitle>컴퓨터소프트웨어학과 전공동아리</S.MainSectionSubTitle>
          </S.MainSectionInner>
        </S.MainSection>

        <S.MessageSection>
          <S.MessageSectionInner>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <S.SectionTitle>
                {'EL은 컴소과 유일의 PD Lab Pre-Star 선정 동아리입니다.'}
              </S.SectionTitle>
              <S.SectionDescription>2023년기준 한이음ICT, 교내/교외 대회수상, 논문게재를 포함하여 7가지의 실적을 이뤄냈습니다..</S.SectionDescription>
            </AnimationOnScroll>
          </S.MessageSectionInner>
        </S.MessageSection>

        <S.AboutELSection id="aboutEL">
          <S.AboutELSectionInner>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <S.SectionTitle>EL 소개</S.SectionTitle>
              <S.SectionDescription>
                EL에서는 게임 / 웹/ 앱 등
                <br /> 본인이 관심을 가진 다양한 분야의 프로젝트를 통해
                <br />
                개발 능력과 협업 능력 향상시키며 함께 성장합니다.
                <br />
                활발한 소통과 피드백을 통해 개인과 공동체 발전을 촉진합니다.
              </S.SectionDescription>
            </AnimationOnScroll>
          </S.AboutELSectionInner>
        </S.AboutELSection>

        <S.DevtiSection>
          <S.SectionTitle>개발성격 유형검사 Devti</S.SectionTitle>
          <S.SectionDescription>
            아래의 카드를 클릭하여 당신의 <strong onClick={handleDevtiClick}>Devti</strong>를 확인해보세요.
            
          </S.SectionDescription>
          <S.DevtiCardSection>
            <DevtiCard />
            <StackCard />
          </S.DevtiCardSection>
        </S.DevtiSection>

        <ProjectsSection />

      </S.Container>
    </PageLayout>
  );
};

export default HomePage;
