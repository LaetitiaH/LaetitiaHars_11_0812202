import styled from "styled-components";
import star from "../../assets/star.png";
import starRed from "../../assets/star-red.png";
import PropTypes from "prop-types";

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  @media (min-width: 1024px) {
    column-gap: 10px;
  }
`;

const StarContent = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  column-gap: 5px;

  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
    column-gap: 10px;
  }
`;

const StarImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Stars = ({ nbStarsTotal, nbStars }) => {
  const stars = [...Array(nbStarsTotal).keys()];
  return (
    <StarContainer>
      {stars.map((_, index) =>
        index < nbStars ? (
          <StarContent key={index}>
            <StarImg src={starRed} />
          </StarContent>
        ) : (
          <StarContent key={index}>
            <StarImg src={star} />
          </StarContent>
        )
      )}
    </StarContainer>
  );
};

export default Stars;

Stars.propTypes = {
  nbStarsTotal: PropTypes.number.isRequired,
  nbStars: PropTypes.number.isRequired,
};
