import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import { Link } from 'react-router-dom';
// import Appartement from '../../pages/DetailCard';
import PropTypes from 'prop-types';

// const CardsContainer = styled.div`
//   margin-top: 50px;
// `;

const Card = styled(Link)`
  display: flex;
  border-radius: 10px;
  position: relative;
  &:hover {
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  opacity: 0.7;
  transition: 400ms;
  &:hover {
    box-shadow: 5px 5px 10px #e2e3e9;
    opacity: 1;
  }
`;
const CardTitle = styled.h2`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  bottom: 0px;
  left: 20px;
  position: absolute;
  color: ${colors.light};
`;

// Function generating Cards in Home Page
function Cards({ id, title, cover }) {
  const state = {
    apartmentId: id,
  };

  return (
    <Card
      to={`/Appartement/${state?.apartmentId}`}
      state={state}
      id={id}
      className="Home_container_offers_card"
    >
      <CardImage
        src={cover}
        className="Home_container_offers_card_img"
        alt="Immage annonce"
      />
      <CardTitle className="Home_container_offers_card_title">
        {title}
      </CardTitle>
    </Card>
  );
}

//PropTypes are defined as required
Cards.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.any.isRequired,
};
//Default propTypes if an error occures in data asignement
Cards.defaultProps = {
  id: 'Un id par default',
  title: 'Une titre par default',
  cover: 'Une image manquante',
};

export default Cards;
