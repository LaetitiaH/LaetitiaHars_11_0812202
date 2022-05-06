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
  border-radius: ${({ radius }) => radius};
  object-fit: cover;

  @media (min-width: 1024px) {
    border-radius: 25px;
  }
`;

const Background = styled.div`
  background: #000000;
  mix-blend-mode: darken;
  opacity: 0.3;
  border-radius: ${({ radius }) => radius};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;

  @media (min-width: 1024px) {
    border-radius: 25px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  position: absolute;
  top: 30%;
  font-size: 24px;
  font-weight: 500;
  margin-left: 16px;

  @media (min-width: 1024px) {
    font-size: 48px;
    right: 32%;
  }
`;

const Banner = ({ source, height, radius, text }) => {
  return (
    <BannerContainer height={height}>
      <BannerImg src={source} radius={radius} />
      <Background radius={radius} />
      {text && <Text>{text}</Text>}
    </BannerContainer>
  );
};

export default Banner;

Banner.propTypes = {
  source: PropTypes.string.isRequired,
  height: PropTypes.string,
  radius: PropTypes.string,
  text: PropTypes.string,
};

Banner.defaultProps = {
  height: "223px",
  radius: "25px",
};
