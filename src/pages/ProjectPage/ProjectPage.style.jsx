import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../styles';
import { Colors } from '../../theme';

export const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 90px 20px 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 82px 20px 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 74px 20px 20px;
  }
`;

export const YouTubeWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;

  & > .projectPage__youTube {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;

  & > img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProjectName = styled.h1`
  display: flex;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-bottom: 18px;
    font-size: 42px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 14px;
    font-size: 30px;
  }
`;

export const ProjectSummary = styled.p`
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${Colors.white};
  text-align: center;
  color: black;

  a {
    color: #333d4b;
    text-decoration: none;
  }
`;

export const Icon = styled.span``;

export const Text = styled.span`
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #333d4b;
  vertical-align: center;
`;

export const IconTextWrapper = styled.span`
  display: flex;
  align-items: center;

  & > .button_icon {
    font-size: 18px;
    color: '#333D4B';
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 26px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 24px;
  }
`;

export const SectionDescription = styled.p`
  line-height: 1.6;
  font-size: 18px;
  white-space: pre-wrap;
  color: ${Colors.white};
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const PochakImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;

  /* 기본 상태: 최대 2개 이미지 좌우 정렬 */
  & > img {
    width: calc(50% - 12px); /* 2개 이미지 시 좌우 정렬 */
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
  }

  /* 모바일에서 세로로 나열 */
  @media (max-width: ${BREAKPOINTS[1]}px) {
    & > img {
      width: 100%;
    }
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    & > img {
      width: 100%;
    }
  }
`;

export const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 32px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 18px;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px; /* Adjust the space between buttons as needed */
  margin-top: 40px;
`;

export const PreviousButton = styled.button`
  display: ${props => (props.hidden ? 'none' : 'block')};
  width: 170px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background-color: ${Colors.blue};
  color: ${Colors.white};
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.disabled ? Colors.blue : Colors.darkBlue)};
  }
`;

export const NextButton = styled.button`
  display: ${props => (props.hidden ? 'none' : 'block')};
  width: 170px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background-color: ${Colors.blue};
  color: ${Colors.white};
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.disabled ? Colors.blue : Colors.darkBlue)};
  }
`;
