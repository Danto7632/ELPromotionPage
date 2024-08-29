import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import React from 'react';

const Header = () => {
  const navigate = useNavigate();

  const handleNavItemClick = async (pathname, sectionId) => {
    await navigate(pathname);
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  // 기존에 새 탭을 여는 방식에서 같은 창에서 열도록 변경
  const handleFormClick = () => {
    window.location.href = 'https://forms.gle/V4Lj6G5xKGgUpfkT7';
  };

  return (
    <S.Header>
      <S.Inner>
        <S.Logo href="/">EL</S.Logo>
        <S.Nav>
          <S.NavItem onClick={() => handleNavItemClick('/', 'aboutEL')}>
            EL 소개
          </S.NavItem>
          <S.NavItem onClick={() => handleNavItemClick('/', 'projectsSection')}>
            활동 소개
          </S.NavItem>
          <S.NavDivider />
          <S.NavItem onClick={handleFormClick}>지원하기</S.NavItem>
        </S.Nav>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
