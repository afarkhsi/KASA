import colors from '../../utils/styles/colors';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 30px;
  color: ${colors.primary};
  margin: auto;
`;

const PageSubtitle = styled.h2`
  font-size: 18px;
  color: ${colors.primary};
  font-weight: 500;
  text-align: center;
  padding-bottom: 30px;
`;

const PageTags = styled.span`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background-color: ${colors.primary};
  color: ${colors.light};
  width: 115px;
  height: 25px;
  border-radius: 15px;
`;

function TitleTags() {
  return (
    <TitleContainer>
      <PageTitle>Titre principal</PageTitle>
      <PageSubtitle>Description</PageSubtitle>
      <PageTags>Cosy</PageTags>
    </TitleContainer>
  );
}

export default TitleTags;
