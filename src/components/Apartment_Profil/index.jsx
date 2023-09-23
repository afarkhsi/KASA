import colors from '../../utils/styles/colors';
import styled from 'styled-components';

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ProfilDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const ProfilTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${colors.primary};
`;

const ProfilImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${colors.primary};
`;

const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.5rem;
`;

const Star = styled.span`
  background-color: ${colors.primary};
  width: 36px;
  height: 36px;
`;

function Profil() {
  return (
    <ProfilContainer>
      <ProfilDiv>
        <ProfilTitle>Alexandre Dumas</ProfilTitle>
        <ProfilImg></ProfilImg>
      </ProfilDiv>
      <StarsContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarsContainer>
    </ProfilContainer>
  );
}

export default Profil;
