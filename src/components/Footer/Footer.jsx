import * as S from './Footer.style';

const FOOTER_INFO_LIST = [
  {
    title: '개발 & 디자인',
    contentList: ['김인성 (컴퓨터소프트웨어공학과 23)'],
  },
];

const Footer = () => (
  <S.Footer>
    <S.FooterInner>
      <S.InfoList>
        {FOOTER_INFO_LIST.map(({ title, contentList }) => (
          <S.InfoItem key={title}>
            <S.InfoTitle>{title}</S.InfoTitle>
            <S.InfoContentList>
              {contentList.map(content => (
                <S.InfoContentItem key={content}>
                  <S.InfoContent>{content}</S.InfoContent>
                </S.InfoContentItem>
              ))}
            </S.InfoContentList>
          </S.InfoItem>
        ))}
      </S.InfoList>
      <S.Copyright>Copyright ⓒ EL. All Rights Reserved.</S.Copyright>
    </S.FooterInner>
  </S.Footer>
);

export default Footer;
