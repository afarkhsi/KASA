import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Banner from '../../components/Banner';
import DropDownsAbout from '../../components/About_Dropdowns';
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
`;

function About() {
  console.log(dataAbout);
  return (
    <AboutWrapper className="about_container">
      <Banner imageUrl={Montagnes} text="" />
      {dataAbout.map((data, id) => (
        <DropDownsAbout
          key={id}
          aboutTitle={data.aboutTitle}
          aboutText={data.aboutText}
        />
      ))}
    </AboutWrapper>
  );
}

export default About;
