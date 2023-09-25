import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import React from 'react';

const CarrouselContainer = styled.div`
  width: 1240px;
  height: 415px;
  margin: auto;
  border-radius: 10px;
`;

const CarrouselImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

function Carrousel(props) {
  return (
    <CarrouselContainer className="apartment_page_caroussel_img">
      <CarrouselImg src={props.imageUrl} alt="" />
    </CarrouselContainer>
  );
}

export default Carrousel;
