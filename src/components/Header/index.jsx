import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RedLogo from '../../assets/logo.png';
import colors from '../../utils/styles/colors';

const HomeLogo = styled.img`
  width: 210px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={RedLogo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/">Profils</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
