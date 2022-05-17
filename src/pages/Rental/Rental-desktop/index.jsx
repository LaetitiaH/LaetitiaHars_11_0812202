import styled from "styled-components";
import colors from "../../../utils/colors";
import Profil from "../../../components/Profil";
import Tag from "../../../components/Tag";
import Stars from "../../../components/Star";
import PropTypes from "prop-types";

const RentalTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const RentalTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: ${colors.primary};
  margin-top: 15px;
`;

const RentalLocalization = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.primary};
  margin-top: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
  row-gap: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const RentalDesktop = ({ rental }) => (
  <>
    <RentalTitles>
      <div>
        <RentalTitle>{rental.title}</RentalTitle>
        <RentalLocalization>{rental.location}</RentalLocalization>
      </div>
      <Profil host={rental.host} />
    </RentalTitles>

    <InfoContainer>
      <TagContainer>
        {rental.tags.map((tag) => (
          <Tag title={tag} key={tag} />
        ))}
      </TagContainer>
      <Stars nbStarsTotal={5} nbStars={+rental.rating} />
    </InfoContainer>
  </>
);

export default RentalDesktop;

RentalDesktop.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    rating: PropTypes.string,
    location: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};
