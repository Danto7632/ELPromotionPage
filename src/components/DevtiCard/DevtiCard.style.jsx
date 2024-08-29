import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { BREAKPOINTS } from '../../styles'; // BREAKPOINTS 다시 추가

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const OriginalRolling = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  50.01% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const CloneRolling = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
`;

export const CardContainerOriginal1 = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  animation: ${OriginalRolling} 60s linear infinite;
  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerClone1 = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  animation: ${CloneRolling} 60s linear infinite;
  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerOriginal2 = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  animation: ${OriginalRolling} 60s linear reverse infinite;
  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerClone2 = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  animation: ${CloneRolling} 60s linear reverse infinite;
  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const Card = styled.div`
  width: 180px;
  height: 240px;
  margin: 20px 20px 0 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  transition: width 0.5s;
  cursor: pointer; /* 마우스 커서 손 모양으로 변경 */

  &:hover {
    width: calc(180px * 1.2);
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 162px;
    margin: 18px 18px 0 0;
    
    &:hover {
      width: calc(162px * 1.2);
    }
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 126px;
    margin: 14px 14px 0 0;
    
    &:hover {
      width: calc(126px * 1.2);
    }
  }
`;
