import styled from "styled-components";
import PropTypes from "prop-types";

const BannerContainer = styled.div`
  height: ${({ height }) => height};
  box-sizing: border-box;
  position: relative;
  margin: 0 20px;

  @media (min-width: 1024px) {
    margin: 0 100px;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
`;

const Background = styled.div`
  background: #000000;
  mix-blend-mode: darken;
  opacity: 0.3;
  border-radius: 25px;
  height: 223px;
  width: 100%;
  position: absolute;
  top: 0;
`;

const Banner = ({ source, height }) => {
  return (
    <BannerContainer height={height}>
      <BannerImg src={source} />
      <Background />
    </BannerContainer>
  );
};

export default Banner;

Banner.propTypes = {
  source: PropTypes.string.isRequired,
  height: PropTypes.string,
};

Banner.defaultProps = {
  height: "223px",
};
