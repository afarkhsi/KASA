import styled from 'styled-components';
import Carrousel from '../../components/Carrousel';
import TitleTags from '../../components/Apartment_Title';
import Profil from '../../components/Apartment_Profil';
import DropDowns from '../../components/Collapse_Details/DropDowns';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Error from '../../components/Error';
import './style.css';

const ApartmentWrapper = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
`;

const ProfilWrapper = styled.section`
  display: flex;
`;

const DropdownsWrapper = styled.section`
  max-width: 1240px;
`;

// Function generating Apartment Page
function Apartment() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApartment(location, setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (location?.state?.apartmentId == null) {
    return <Error />;
  }

  if (data == null) return <div>Loading ....</div>;

  const equipements = data?.equipments?.map((item, index) => (
    <li key={index} className="dropdown_list_item">
      {item}
    </li>
  ));
  console.log('tessst:', equipements);

  return (
    <ApartmentWrapper className="apartment_page">
      <Carrousel pictures={data.pictures} />
      <ProfilWrapper className="apartment_page_profil">
        <TitleTags data={data} className="apartment_page_profil_title_tags" />
        <Profil data={data} className="apartment_page_profil_info" />
      </ProfilWrapper>
      <DropdownsWrapper className="apartment_page_dopdowns">
        <DropDowns
          className="apartment_page_dopdown"
          Title="Description"
          Text={data.description}
        />
        <DropDowns
          className="apartment_page_dopdown"
          Title="Équipements"
          Text={equipements}
        />
      </DropdownsWrapper>
    </ApartmentWrapper>
  );
}

function fetchApartment(location, setData) {
  fetch('../../data.json')
    .then((r) => r.json())
    .then((aparts) => {
      const apartmentFilter = aparts.find(
        (apartment) => apartment.id === location.state?.apartmentId
      );
      setData(apartmentFilter);
      console.log('Fetch data par ID:', apartmentFilter);
    });
}
export default Apartment;
