import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Image from '../../assets/Falaises.png';

const BannerContainer = styled.div`
  height: 223px;
  align-items: center;
  position: relative;
  justify-content: center;
  display: flex;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: black;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  z-index: 0;
  opacity: 0.6;
`;
const BannerTitle = styled.h1`
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 48px;
  color: ${colors.light};
  position: absolute;
  z-index: 1;
  font-weight: 300;
`;

function Banner() {
  return (
    <BannerContainer className="Home_container_banner">
      <BannerImg
        src={Image}
        className="Home_container_banner_img"
        alt="Banniere image"
      ></BannerImg>
      <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
    </BannerContainer>
  );
}

export default Banner;
