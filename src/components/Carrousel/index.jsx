import styled from 'styled-components';
import React, { useState } from 'react';
import ArrowImg from '../../assets/arrow.svg';
import './style.css';

const CarrouselContainer = styled.div`
  margin: auto;
  border-radius: 10px;
  position: relative;
  display: flex;
`;

const CarrouselImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  position: absolute;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
`;

const CarrouselBtnNext = styled.button`
  height: 100%;
  background: none;

  border: none;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  opacity: 0.6;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const CarrouselBtnPrev = styled.button`
  height: 100%;
  top: 0;
  background: none;
  border: none;
  position: absolute;
  z-index: 1;
  left: 0;
  opacity: 0.6;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const CarrouselPictureNumber = styled.span`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 26px;
`;

function Carrousel(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const index = currentPicture + 1;
  const rules = pictures?.length;

  const nextPicture = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const prevPicture = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  };

  return (
    <CarrouselContainer className="apartment_page_caroussel_container">
      {rules > 1 ? (
        <CarrouselBtnNext
          className="apartment_page_caroussel_container_btnNext"
          onClick={nextPicture}
        >
          <img src={ArrowImg} alt="button previous" />
        </CarrouselBtnNext>
      ) : (
        ''
      )}

      {rules > 1 ? (
        <CarrouselBtnPrev
          className="apartment_page_caroussel_container_btnPrev"
          onClick={prevPicture}
        >
          <img src={ArrowImg} alt="button previous" />
        </CarrouselBtnPrev>
      ) : (
        ''
      )}

      {rules > 1 ? (
        <CarrouselPictureNumber>
          {index.toString()} / {pictures?.length.toString()}
        </CarrouselPictureNumber>
      ) : (
        ''
      )}

      {pictures?.map((picture, i) => (
        <CarrouselImg
          key={picture}
          src={picture}
          alt=""
          className={`apartment_page_caroussel_containe_img ${
            currentPicture === i ? 'show' : 'unshow'
          }`}
        />
      ))}
    </CarrouselContainer>
  );
}

export default Carrousel;
