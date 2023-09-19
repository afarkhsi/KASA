import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import ErrorIllustration from '../../assets/404.png';

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`;

const ErrorTitle = styled.h3`
  font-weight: 300;
`;

const ErrorSubtitle = styled.h4`
  font-weight: 300;
  color: ${colors.primary};
`;

const Illustration = styled.img`
  max-width: 800px;
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} />
      <ErrorSubtitle>Oups 🙈 Cette page n'existe pas</ErrorSubtitle>
    </ErrorWrapper>
  );
}

export default Error;
