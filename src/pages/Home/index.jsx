import Banner from '../../components/Banner';
import Cards from '../../components/Card';
import styled from 'styled-components';
import { Loader } from '../../utils/styles/Atoms';
// import { offers } from '../../data/data';
import './style.css';
import { useFetch } from '../../utils/Hooks/index';
// import { useEffect, useState } from 'react';
import Error from '../../components/Error';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`;

// V1 DATA
// function Home() {
//   return (
//     <HomeWrapper className="Home_container">
//       <Banner />
//       {/* {isLoading ? (
//       <LoaderWrapper>
//         <Loader />
//       </LoaderWrapper>
//     ) : ( */}
//       <CardsContainer className="Home_container_offers">
//         {offers.map((offer) => (
//           <Cards
//             key={offer.id}
//             id={offer.id}
//             title={offer.title}
//             cover={offer.cover}
//           />
//         ))}
//       </CardsContainer>
//       {/* )} */}
//     </HomeWrapper>
//   );
// }

// V2 DATA
function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     if (!'./data2.json') return;
  //     setLoading(true);
  //     const response = await fetch('./data2.json');
  //     const json = await response.json();
  //     console.log(response.ok);
  //     console.log(json);
  //     if (response.ok) {
  //       setData(json);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const { data, isLoading } = useFetch('./data.json');

  return (
    <HomeWrapper className="Home_container">
      <Banner />
      {isLoading ? (
        <LoaderWrapper className="loader">
          <Loader />
          <Error />
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
