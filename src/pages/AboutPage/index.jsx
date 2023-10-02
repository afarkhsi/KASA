import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Banner from '../../components/Banner';
import DropDowns from '../../components/Apartment_Details';
import Montagnes from '../../assets/Montagnes.png';
import dataAbout from '../../data/aboutData.json';

const AboutWrapper = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  width: 100%;
`;

const DropdownsWrapper = styled.section`
  max-width: 1023px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

function About() {
  console.log(dataAbout);
  return (
    <AboutWrapper className="about_container">
      <Banner imageUrl={Montagnes} text="" />
      <DropdownsWrapper className="dropdown_wrapper">
        {dataAbout.map((data, id) => (
          <DropDowns key={id} Title={data.aboutTitle} Text={data.aboutText} />
        ))}
      </DropdownsWrapper>
    </AboutWrapper>
  );
}

export default About;
