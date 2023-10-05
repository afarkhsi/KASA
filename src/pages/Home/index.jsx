import Banner from '../../components/Banner';
import Cards from '../../components/Card';
import styled from 'styled-components';
import { Loader } from '../../utils/styles/Atoms';
import './style.css';
import { useFetch } from '../../utils/Hooks/index';
import Image from '../../assets/Falaises.png';

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1240px;
  width: 100%;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CardsContainer = styled.div`
  margin-top: 50px;
  max-width: 1240px;
  margin: auto;
  display: grid;
`;

// Function generating Home Page
function Home() {
  const { data, isLoading } = useFetch('./data.json');

  return (
    <HomeWrapper className="Home_container">
      <Banner imageUrl={Image} text="Chez vous, partout et ailleurs" />
      {isLoading ? (
        <LoaderWrapper className="loader">
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer className="Home_container_offers">
          {data &&
            data.map((offer) => (
              <Cards
                key={offer.id}
                id={offer.id}
                title={offer.title}
                cover={offer.cover}
              />
            ))}
        </CardsContainer>
      )}
    </HomeWrapper>
  );
}

export default Home;
