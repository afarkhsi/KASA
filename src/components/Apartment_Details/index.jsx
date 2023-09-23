import colors from '../../utils/styles/colors';
import styled from 'styled-components';
import { useState } from 'react';
import './style.css';

const DropdownsWrapper = styled.section`
  max-width: 1240px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
`;

const DetailDropdown = styled.div`
  background-color: ${colors.primary};
  margin: auto;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  cursor: pointer;
`;

const DetailDropdownTitle = styled.h3`
  font-size: 18px;
  color: ${colors.light};
  font-weight: 500;
  text-align: start;
  padding-left: 10px;
`;

const DetailDropdownMenu = styled.ul`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  height: 200px;
  background-color: ${colors.light};
  color: ${colors.primary};
  margin: 0;
  padding: 10px;
`;

const DetailDropdownMenuStuff = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  height: 200px;
  background-color: ${colors.light};
  color: ${colors.primary};
  margin: 0;
  padding: 10px;
`;

const DetailDropdownItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  text-align: start;
  list-style-type: none;
`;

function DropDowns() {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);

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
            Description
          </DetailDropdownTitle>
        </DetailDropdown>
        <DetailDropdownMenuStuff
          className={`dropdown_stuff ${open ? 'active' : 'inactive'}`}
        >
          BLABLABAALAAJKAJLA
        </DetailDropdownMenuStuff>
      </DetailsContainer>

      <DetailsContainer className="dropdown">
        <DetailDropdown
          className="dropdown_button"
          onClick={() => {
            setOpenList(!openList);
          }}
        >
          <DetailDropdownTitle className="dropdown_button_title">
            Description
          </DetailDropdownTitle>
        </DetailDropdown>
        <DetailDropdownMenu
          className={`dropdown_list ${openList ? 'active' : 'inactive'}`}
        >
          <DetailDropdownItem className="dropdown_list_item">
            {' '}
            Test
          </DetailDropdownItem>
          <DetailDropdownItem className="dropdown_list_item">
            {' '}
            Test
          </DetailDropdownItem>
          <DetailDropdownItem className="dropdown_list_item">
            {' '}
            Test
          </DetailDropdownItem>
          <DetailDropdownItem className="dropdown_list_item">
            {' '}
            Test
          </DetailDropdownItem>
        </DetailDropdownMenu>
      </DetailsContainer>
    </DropdownsWrapper>
  );
}

export default DropDowns;
