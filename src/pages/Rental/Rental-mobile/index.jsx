import styled from "styled-components";
import colors from "../../../utils/colors";
import Profil from "../../../components/Profil";
import Tag from "../../../components/Tag";
import Stars from "../../../components/Star";
import PropTypes from "prop-types";

const RentalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.primary};
  margin-top: 15px;
`;

const RentalLocalization = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.primary};
  margin-top: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 13px;
  flex-wrap: wrap;
  row-gap: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const RentalMobile = ({ rental }) => (
  <>
    <RentalTitle>{rental.title}</RentalTitle>
    <RentalLocalization>{rental.location}</RentalLocalization>

    <TagContainer>
      {rental.tags.map((tag) => (
        <Tag title={tag} key={tag} />
      ))}
    </TagContainer>

    <InfoContainer>
      <Stars nbStarsTotal={5} nbStars={+rental.rating} />
      <Profil host={rental.host} />
    </InfoContainer>
  </>
);

export default RentalMobile;

RentalMobile.propTypes = {
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
