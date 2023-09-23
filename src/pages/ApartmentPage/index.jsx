import styled from 'styled-components';
import Carrousel from '../../components/Carrousel';
import TitleTags from '../../components/Apartment_Title_Tags';
import Profil from '../../components/Apartment_Profil';
import DropDowns from '../../components/Apartment_Details';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from '../../utils/styles/Atoms';
import { RentalsContext } from '../..';

const ApartmentWrapper = styled.section`
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

// const DropdownsWrapper = styled.section`
//   max-width: 1240px;
//   margin-top: 50px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 3rem;
// `;

function Apartment() {
  const location = useLocation();
  console.log('Appartement ID :', location.state.apartmentId);

  // const [data, setData] = useState(null);
  // useEffect(fetchAppartment, []);

  // function fetchAppartment() {
  //   fetch('./data.json')
  //     .then((response) => response.json())
  //     .then((apartments) => {
  //       const apartmentFilter = apartments.find(
  //         (apartment) => apartment.id === location.state.apartmentId
  //       );
  //       setData(data);
  //       console.log(apartmentFilter);
  //     })
  //     .catch(console.error);
  //   return data;
  // }

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(test, []);

  function test() {
    if (!'./data.json') return;
    setLoading(true);
    const fetchAppartment = async () => {
      const response = await fetch('./data.json');
      const json = await response.json();
      const apartmentFilter = json.find(
        (apartment) => apartment.id === location.state.apartmentId
      );
      console.log('DATA du produit : ', apartmentFilter);
      if (response.ok) {
        setData(apartmentFilter);
        setLoading(false);
      }
    };

    fetchAppartment();
  }

  // console.log('test dataa:', data.cover);

  return (
    <ApartmentWrapper className="apartment_page">
      data: {JSON.stringify(data)}
      <Carrousel imageUrl="" />
      <ProfilWrapper>
        <TitleTags />
        <Profil />
      </ProfilWrapper>
      <DropDowns />
    </ApartmentWrapper>
  );
}

export default Apartment;
