import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import ErrorIllustration from '../../assets/404.png';
import { Link } from 'react-router-dom';

const ErrorWrapper = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
  justify-content: center;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.primary};
`;

const Illustration = styled.img`
width: 597px
height: 263px
`;

const ReturnMain = styled(Link)`
  font-family: Montserrat;
  font-size: 18px;
  color: #ff6060;
  font-weight: 500;
`;

// const ReturnMainTitle = styled.h3`

// `

function Error() {
  return (
    <ErrorWrapper className="error_container">
      <Illustration src={ErrorIllustration} />
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ReturnMain to="/">Retourner sur la page d’accueil</ReturnMain>
    </ErrorWrapper>
  );
}

export default Error;
