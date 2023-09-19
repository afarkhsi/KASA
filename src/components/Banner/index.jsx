import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Image from '../../assets/Montagnes.png';

const BannerContainer = styled.div`
  max-width: 1240px;
  height: 223px;
  align-items: center;
  margin: auto;
  position: relative;
  justify-content: center;
  display: flex;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  z-index: 0;
`;
const BannerTitle = styled.span`
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 48px;
  color: ${colors.light};
  position: absolute;
  z-index: 1;
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerImg src={Image}></BannerImg>
      <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
    </BannerContainer>
  );
}

export default Banner;
