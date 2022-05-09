import styled from "styled-components";
import colors from "../../utils/colors";
import PropTypes from "prop-types";
import RentalCard from "../RentalCard";

const ProfilContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 33px;
  column-gap: 10.5px;

  @media (min-width: 1024px) {
    height: 64px;
  }
`;

const ProfilNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 1px;
  font-size: 12px;
  color: ${colors.primary};

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const ProfilName = styled.p`
  margin: 0;
`;

const ProfilImg = styled.img`
  background-color: #c4c4c4;
  border-radius: 50%;
  width: 32px;
  height: 32px;

  @media (min-width: 1024px) {
    width: 64px;
    height: 64px;
  }
`;

const Profil = ({ host }) => {
  const surName = host.name.split(" ")[0];
  const name = host.name.split(" ")[1];

  return (
    <ProfilContainer>
      <ProfilNameContainer>
        <ProfilName>{surName}</ProfilName>
        <ProfilName>{name}</ProfilName>
      </ProfilNameContainer>
      <ProfilImg src={host.picture} />
    </ProfilContainer>
  );
};

export default Profil;

RentalCard.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
  }),
};
