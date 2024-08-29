import React, { useState } from 'react';
import * as S from './DevtiCard.style';
import devtiList from './DevtiList';

export default function DevtiCard() {
  const [isHoveredCon1, setIsHoveredCon1] = useState(false);
  const [isHoveredCon2, setIsHoveredCon2] = useState(false);

  const handleCardClick = () => {
    window.location.href = 'https://6yoon.github.io/'; // 클릭 시 이동할 링크
  };

  return (
    <>
      {/* 상단 8개 카드 */}
      <S.Container
        onMouseEnter={() => setIsHoveredCon1(true)}
        onMouseLeave={() => setIsHoveredCon1(false)}
      >
        <S.CardContainerOriginal1 isHovered={isHoveredCon1}>
          {devtiList.slice(0, 8).map((devti, index) => (
            <S.Card
              key={index}
              image={devti.devtiImg}
              onClick={handleCardClick}
            />
          ))}
        </S.CardContainerOriginal1>
        <S.CardContainerClone1 isHovered={isHoveredCon1}>
          {devtiList.slice(0, 8).map((devti, index) => (
            <S.Card
              key={index}
              image={devti.devtiImg}
              onClick={handleCardClick}
            />
          ))}
        </S.CardContainerClone1>
      </S.Container>

      {/* 하단 8개 카드 */}
      <S.Container
        onMouseEnter={() => setIsHoveredCon2(true)}
        onMouseLeave={() => setIsHoveredCon2(false)}
      >
        <S.CardContainerOriginal2 isHovered={isHoveredCon2}>
          {devtiList.slice(8).map((devti, index) => (
            <S.Card
              key={index}
              image={devti.devtiImg}
              onClick={handleCardClick}
            />
          ))}
        </S.CardContainerOriginal2>
        <S.CardContainerClone2 isHovered={isHoveredCon2}>
          {devtiList.slice(8).map((devti, index) => (
            <S.Card
              key={index}
              image={devti.devtiImg}
              onClick={handleCardClick}
            />
          ))}
        </S.CardContainerClone2>
      </S.Container>
    </>
  );
}
