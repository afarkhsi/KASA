import colors from '../../utils/styles/colors';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PageTitle = styled.h1`
  font-weight: 500;
  color: ${colors.primary};
  text-align: start;
`;

const PageSubtitle = styled.h2`
  color: ${colors.primary};
  font-weight: 500;
  text-align: center;
`;

const PageTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PageTags = styled.span`
  font-weight: 300;
  text-align: center;
  background-color: ${colors.primary};
  color: ${colors.light};
  border-radius: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

// Function generating Title and Tags in Apartment Page
function TitleTags(props) {
  const data = props.data;
  const dataTags = data.tags;
  return (
    <TitleContainer className="apartment_page_profil_container">
      <PageTitle className="apartment_page_profil_container_title">
        {data.title}
      </PageTitle>
      <PageSubtitle className="apartment_page_profil_container_subtitle">
        {data.location}
      </PageSubtitle>
      <PageTagsContainer className="apartment_page_profil_container_tags">
        {/* {dataTags} */}
        {dataTags?.map((tag) => (
          <PageTags
            className="apartment_page_profil_container_tags_item"
            key={tag}
          >
            {tag}
          </PageTags>
        ))}
      </PageTagsContainer>
    </TitleContainer>
  );
}

export default TitleTags;
