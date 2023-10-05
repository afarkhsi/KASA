import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const BannerContainer = styled.div`
  align-items: center;
  position: relative;
  justify-content: center;
  display: flex;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
  max-width: 1240px;
  border-radius: 25px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  z-index: 0;
  opacity: 0.6;
  border-radius: 25px;
`;
const BannerTitle = styled.h1`
  font-family: 'Montserrat', Helvetica, sans-serif;
  color: ${colors.light};
  position: absolute;
  z-index: 1;
  font-weight: 300;
  padding: 0px 15px;
`;

// Function generating Banner in Home Page and About Page
function Banner(props) {
  const imageUrl = props.imageUrl;
  let textBanner = props.text;
  return (
    <BannerContainer className="Home_container_banner">
      <BannerImg
        src={imageUrl}
        className="Home_container_banner_img"
        alt="Banniere image"
      ></BannerImg>
      <BannerTitle className="Home_container_banner_title">
        {textBanner}
      </BannerTitle>
    </BannerContainer>
  );
}

export default Banner;
