import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RedLogo from '../../assets/logo.png';
import colors from '../../utils/styles/colors';
import './style.css';

const HomeLogo = styled.img`
  background-color: ${colors.light};
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <NavContainer className="header">
      <Link className="header_logo" to="/">
        <HomeLogo className="header_logo_img" src={RedLogo} alt="Kasa logo" />
      </Link>
      <div className="header_nav">
        <StyledLink to="/" className="header_nav_link">
          Accueil
        </StyledLink>
        <StyledLink to="/About" className="header_nav_link">
          A propos
        </StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
