import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import React from 'react';

const CarrouselContainer = styled.div`
  width: 1240px;
  height: 415px;
  margin: auto;
  border: 5px solid black;
  color: ${colors.primary};
  border-radius: 10px;
`;

const CarrouselImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

function Carrousel(props) {
  return (
    <CarrouselContainer>
      <CarrouselImg src={props.imageUrl} alt="" />
    </CarrouselContainer>
  );
}

export default Carrousel;
