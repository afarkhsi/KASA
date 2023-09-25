import styled from 'styled-components';
import Carrousel from '../../components/Carrousel';
import TitleTags from '../../components/Apartment_Title';
import Profil from '../../components/Apartment_Profil';
import DropDowns from '../../components/Apartment_Details';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Loader } from '../../utils/styles/Atoms';
// import { useSearchParams } from 'react-router-dom';
// import ApartmentTest from '../../components/Apartment_test';

const ApartmentWrapper = styled.main`
  max-width: 1240px;
  margin: auto;
`;

const ProfilWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
`;

// const LoaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `;

function Apartment() {
  const location = useLocation();
  console.log('Appartement ID :', location.state.apartmentId);

  const [data, setData] = useState([]);
  // let [searchParams, setSearchParams] = useSearchParams()

  // console.log('URL ID:', urlPhotographerId);

  useEffect(() => {
    fetch('./data.json')
      .then((r) => r.json())
      .then((aparts) => {
        const apartmentFilter = aparts.find(
          (apartment) => apartment.id === location.state.apartmentId
        );
        setData(apartmentFilter);
        console.log('Fetch data par ID:', apartmentFilter);
      });
  }, []);

  // const profilHost = data.filter((d) => d.host === data.host);

  // console.log('proprio:', data.host.name);

  if (data == null) return <div>Loading ....</div>;

  return (
    <ApartmentWrapper className="apartment_page">
      {/* data: {JSON.stringify(data)} */}
      <Carrousel
        imageUrl={data.cover}
        className="apartment_page_caroussel_img"
      />
      <ProfilWrapper className="apartment_page_profil">
        <TitleTags data={data} className="apartment_page_profil_title_tags" />
        <Profil data={data} className="apartment_page_profil_info" />
      </ProfilWrapper>
      <DropDowns
        key={data.id}
        data={data}
        className="apartment_page_dopdowns"
      />
    </ApartmentWrapper>
  );
}

export default Apartment;
