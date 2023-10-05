import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import { useState } from 'react';
import './style.css';
import ArrowImg from '../../assets/arrow.svg';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
`;

const DetailDropdown = styled.div`
  background-color: ${colors.primary};
  // margin: auto;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailDropdownTitle = styled.h3`
  color: ${colors.light};
  font-weight: 500;
  text-align: start;
  padding-left: 10px;
`;

const DetailDropdownMenuStuff = styled.div`
  font-weight: 400;
  text-align: center;
  max-height: 200px;
  background-color: ${colors.light};
  color: ${colors.primary};
  margin: 0;
  padding: 10px;
  list-style-type: none;
  text-align: start;
`;

// Function generating Dropdowns in Apartment Page and About Page
function DropDowns(props) {
  const [open, setOpen] = useState(false);
  return (
    <DetailsContainer className="dropdown_container">
      <DetailDropdown
        className="dropdown_button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <DetailDropdownTitle className="dropdown_button_title">
          {props.Title}
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
        {props.Text}
      </DetailDropdownMenuStuff>
    </DetailsContainer>
  );
}

export default DropDowns;
