import PropTypes from "prop-types";
import styled from "styled-components";

const RentalCardContainer = styled.div`
  position: relative;
  height: 255px;
  min-width: 335px;
  box-sizing: border-box;
  border-radius: 10px;
  flex: 1;

  @media (min-width: 1024px) {
    height: 340px;
    min-width: 340px;
  }
`;

const RentalCardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const RentalCardText = styled.div`
  color: #ffffff;
  position: absolute;
  left: 5.88%;
  right: 5.88%;
  top: 81.73%;
  bottom: 5.88%;
  font-size: 18px;
  font-weight: 500;
`;

const RentalCard = ({ img, title }) => {
  return (
    <RentalCardContainer>
      <RentalCardImg src={img} />
      <RentalCardText>{title}</RentalCardText>
    </RentalCardContainer>
  );
};

export default RentalCard;

RentalCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

RentalCard.defaultProps = {
  height: "223px",
};
