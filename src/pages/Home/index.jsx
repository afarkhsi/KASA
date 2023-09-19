// import Banner from '../../components/Banner';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const HomeContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer></HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
