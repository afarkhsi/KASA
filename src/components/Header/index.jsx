import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RedLogo from '../../assets/logo.png';
import colors from '../../utils/styles/colors';
import './style.css';

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

const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <NavContainer className="header">
      <Link className="header_logo" to="/">
        <HomeLogo src={RedLogo} alt="Kasa logo" />
      </Link>
      <div className="header_nav">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">A propos</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
