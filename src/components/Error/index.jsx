import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import ErrorIllustration from '../../assets/404.png';
import { Link } from 'react-router-dom';
import './style.css';

const ErrorWrapper = styled.main`
  margin: auto 10px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.primary};
  text-align: center;
`;

const Illustration = styled.img`
  max-width: 597px;
  max-height: 263px;
  width: 100%;
`;

const ReturnMain = styled(Link)`
  font-family: Montserrat;
  color: #ff6060;
  font-weight: 500;
  text-align: center;
`;

// Function generating Error when the url is undifined or false
function Error() {
  return (
    <ErrorWrapper className="error_container">
      <Illustration src={ErrorIllustration} className="error_container_img" />
      <ErrorSubtitle className="error_container_subtitle">
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ReturnMain to="/" className="error_container_homelink">
        Retourner sur la page d’accueil
      </ReturnMain>
    </ErrorWrapper>
  );
}

export default Error;
