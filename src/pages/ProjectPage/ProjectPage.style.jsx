import { Link } from 'react-router-dom';
import { Colors } from '../../theme';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../styles';

export const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 200px;
  padding: 90px 20px 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 82px 20px 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 74px 20px 20px;
  }
`;

// YouTubeWrap 스타일 삭제됨

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

// POCHAK 이미지
export const PochakImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  & > img {
    aspect-ratio: 16 / 9;
    border-radius: 8px;
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
