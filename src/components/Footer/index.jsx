import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import WhiteLogo from '../../assets/logo_white.png';

const FooterContainer = styled.div`
  height: 210px;
  background: ${colors.dark};
  // margin-top: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 55px;
`;

const FooterLogo = styled.img`
  width: 122px;
  height: 40px;
`;

const FooterCopyright = styled.span`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${colors.light};
  position: absolute;
  bottom: 8px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={WhiteLogo} />
      <FooterCopyright>© 2020 Kasa. All rights reserved</FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
