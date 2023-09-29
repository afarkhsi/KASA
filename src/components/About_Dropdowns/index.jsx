import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import { useState } from 'react';
import '../Apartment_Details/style.css';
import ArrowImg from '../../assets/arrow.svg';

const DropdownsWrapper = styled.section`
  max-width: 1240px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 250px;
`;

const DetailDropdown = styled.div`
  background-color: ${colors.primary};
  //   margin: auto;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailDropdownTitle = styled.h3`
  font-size: 18px;
  color: ${colors.light};
  font-weight: 500;
  text-align: start;
  padding-left: 10px;
`;

const DetailDropdownMenuStuff = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  max-height: 200px;
  background-color: ${colors.light};
  color: ${colors.primary};
  margin: 0;
  padding: 10px;
`;

function DropDownsAbout(props) {
  const [open, setOpen] = useState(false);
  //   const [openList, setOpenList] = useState(false);

  return (
    <DropdownsWrapper>
      <DetailsContainer className="dropdown">
        <DetailDropdown
          className="dropdown_button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <DetailDropdownTitle className="dropdown_button_title">
            {props.aboutTitle}
          </DetailDropdownTitle>
          <img
            className={open ? 'arrow spinned' : 'arrow'}
            src={ArrowImg}
            alt="arrow"
          />
        </DetailDropdown>
        <DetailDropdownMenuStuff
          className={`dropdown_stuff ${open ? 'active' : 'inactive'}`}
        >
          {props.aboutText}
        </DetailDropdownMenuStuff>
      </DetailsContainer>

      {/* <DetailsContainer className="dropdown">
        <DetailDropdown
          className="dropdown_button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <DetailDropdownTitle className="dropdown_button_title">
            Respect
          </DetailDropdownTitle>
          <img
            className={open ? 'arrow spinned' : 'arrow'}
            src={ArrowImg}
            alt="arrow"
          />
        </DetailDropdown>
        <DetailDropdownMenuStuff
          className={`dropdown_stuff ${open ? 'active' : 'inactive'}`}
        >
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </DetailDropdownMenuStuff>
      </DetailsContainer>

      <DetailsContainer className="dropdown">
        <DetailDropdown
          className="dropdown_button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <DetailDropdownTitle className="dropdown_button_title">
            Service
          </DetailDropdownTitle>
          <img
            className={open ? 'arrow spinned' : 'arrow'}
            src={ArrowImg}
            alt="arrow"
          />
        </DetailDropdown>
        <DetailDropdownMenuStuff
          className={`dropdown_stuff ${open ? 'active' : 'inactive'}`}
        >
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.{' '}
        </DetailDropdownMenuStuff>
      </DetailsContainer>

      <DetailsContainer className="dropdown">
        <DetailDropdown
          className="dropdown_button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <DetailDropdownTitle className="dropdown_button_title">
            Sécurité
          </DetailDropdownTitle>
          <img
            className={open ? 'arrow spinned' : 'arrow'}
            src={ArrowImg}
            alt="arrow"
          />
        </DetailDropdown>
        <DetailDropdownMenuStuff
          className={`dropdown_stuff ${open ? 'active' : 'inactive'}`}
        >
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </DetailDropdownMenuStuff>
      </DetailsContainer> */}
    </DropdownsWrapper>
  );
}

export default DropDownsAbout;
