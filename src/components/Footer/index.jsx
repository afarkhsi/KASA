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
`;

const FooterLogo = styled.img`
  width: 122px;
  height: 40px;
`;

const FooterCopyright = styled.span`
  font-weight: 500;
  text-align: center;
  color: ${colors.light};
  position: absolute;
`;

// Function generating Footer in all pages
function Footer() {
  return (
    <FooterContainer className="footer_container">
      <FooterLogo className="footer_container_img" src={WhiteLogo} />
      <FooterCopyright className="footer_container_text">
        © 2020 Kasa. All rights reserved
      </FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
