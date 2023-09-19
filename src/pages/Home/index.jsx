import Banner from '../../components/Banner';
import Cards from '../../components/Card';
import styled from 'styled-components';
// import { Loader } from '../../utils/Hooks/Atoms';
import { offers } from '../../data/data';
import './style.css';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1240px;
  margin: auto;
  flex-direction: column;
`;

// const LoaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const CardsContainer = styled.div`
  margin-top: 50px;
  max-width: 1240px;
  margin: auto;
  display: grid;
`;

function Home() {
  // if (error) {
  //   return <span>Oups il y a eu un problème</span>;
  // }
  return (
    <HomeWrapper className="Home_container">
      <Banner />
      {/* {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : ( */}
      <CardsContainer className="Home_container_offers">
        {offers.map((offer) => (
          <Cards id={offer.id} title={offer.title} cover={offer.cover} />
        ))}
      </CardsContainer>
      {/* )} */}
    </HomeWrapper>
  );
}

export default Home;
