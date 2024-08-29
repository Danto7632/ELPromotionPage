import { PageLayout, Header, Footer } from '../../components';
import * as S from './ProjectPage.style';
import { useParams } from 'react-router-dom';
import { Colors } from '../../theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { ACTIVITY_LIST } from '../../database';
import { useEffect } from 'react';
import { sendViewPageEvent, sendClickEvent } from '../../services';

const ProjectPage = () => {
  const { projectId } = useParams();
  const projectData = ACTIVITY_LIST.find(({ id }) => id === Number(projectId));

  const handleLinkButtonClick = (category) => {
    sendClickEvent('CLICK_LINK_BUTTON_IN_PROJECT_PAGE', {
      category,
    });
  };

  useEffect(() => {
    sendViewPageEvent('PROJECT_PAGE', {
      projectId,
    });
  }, [projectId]);

  return (
    <PageLayout
      header={<Header />}
      footer={<Footer />}
      background={`linear-gradient(180deg, ${Colors.skyblue} 0%, ${Colors.blue} 55.73%, #0D0D0D 100%)`}
    >
      <S.Inner>
        {projectData.imageUrl && (
          <S.ImageWrap>
            <img src={projectData.imageUrl} alt={`${projectData.name} thumbnail`} />
          </S.ImageWrap>
        )}
        <S.Project>
          <S.ProjectName>{projectData.name}</S.ProjectName>
          <S.ProjectSummary>{projectData.summary}</S.ProjectSummary>
          <S.ButtonContainer>
            {projectData.downloadLinkUrl && (
              <S.StyledLink
                to={projectData.downloadLinkUrl}
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkButtonClick('DOWNLOAD')}
              >
                <S.IconTextWrapper>
                  <S.Icon>
                    <img
                      src="/images/buttonIcon/download.png"
                      alt="Download Icon"
                      style={{ width: '18px', height: '18px', fill: '#333D4B' }}
                    />
                  </S.Icon>
                  <S.Text>Download</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
            {projectData.webpageLinkUrl && (
              <S.StyledLink
                to={projectData.webpageLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkButtonClick('WEB_PAGE')}
              >
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faLink} className="button__icon" />
                  <S.Text>Link</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
            {projectData.githubUrls.clientUrl && (
              <S.StyledLink
                to={projectData.githubUrls.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkButtonClick('GITHUB_CLIENT')}
              >
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} className="button__icon" />
                  <S.Text>Client</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
            {projectData.githubUrls.serverUrl && (
              <S.StyledLink
                to={projectData.githubUrls.serverUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkButtonClick('GITHUB_SERVER')}
              >
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} className="button__icon" />
                  <S.Text>Server</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
            {projectData.githubUrls.gameUrl && (
              <S.StyledLink
                to={projectData.githubUrls.gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkButtonClick('GITHUB_GAME')}
              >
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} className="button__icon" />
                  <S.Text>Game</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
          </S.ButtonContainer>
          <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '20px 0' }}></div>

          <S.SectionGroup>
            <S.Section>
              <S.SectionTitle>활동 소개</S.SectionTitle>
              <S.SectionDescription>{projectData.introduction}</S.SectionDescription>
            </S.Section>

            <S.Section>
              <S.SectionTitle>활동 설명</S.SectionTitle>
              <S.SectionDescription>{projectData.description}</S.SectionDescription>
            </S.Section>
          </S.SectionGroup>
        </S.Project>
      </S.Inner>
    </PageLayout>
  );
};

export default ProjectPage;
