import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import FullStar from '../../assets/star-active.svg';
import EmptyStar from '../../assets/star-inactive.svg';

const ProfilContainer = styled.div`
  display: flex;
`;

const ProfilDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const ProfilTitle = styled.div`
  font-weight: 500;
  text-align: center;
  color: ${colors.primary};
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 80px;
  text-align: end;
  margin-right: 10px;
`;

const ProfilImg = styled.img`
  border-radius: 50%;
`;

const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Star = styled.img`
  background: none;
`;

// Function generating Profil in Apartment Page
function Profil(props) {
  const data = props.data;
  const profilName = data?.host?.name;
  const profilImg = data?.host?.picture;
  const profilRating = data?.rating;
  const stars = [1, 2, 3, 4, 5];

  return (
    <ProfilContainer className="profil_container">
      <ProfilDiv className="profil_container_info">
        <ProfilTitle className="profil_container_info_name">
          <span>{profilName}</span>
        </ProfilTitle>
        <ProfilImg
          src={profilImg}
          className="profil_container_info_img"
          alt={profilName}
        />
      </ProfilDiv>
      <StarsContainer className="profil_container_rating">
        {stars.map((rate) =>
          profilRating >= rate ? (
            <Star
              key={rate.toString()}
              className="profil_container_rating_star"
              src={FullStar}
              alt="rating"
            />
          ) : (
            <Star
              key={rate.toString()}
              className="profil_container_rating_star"
              src={EmptyStar}
              alt="rating"
            />
          )
        )}
      </StarsContainer>
    </ProfilContainer>
  );
}

export default Profil;
