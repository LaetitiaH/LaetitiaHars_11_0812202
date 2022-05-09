import styled from "styled-components";
import colors from "../../utils/colors";
import PropTypes from "prop-types";

const TagContainer = styled.div`
  min-width: 84px;
  width: max-content;
  height: 18px;
  padding: 0 5px;
  box-sizing: border-box;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  @media (min-width: 1024px) {
    min-width: 115px;
    height: 25px;
    font-size: 14px;
    border-radius: 10px;
  }
`;

const TagText = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Tag = ({ title }) => {
  return (
    <TagContainer>
      <TagText>{title}</TagText>
    </TagContainer>
  );
};

export default Tag;

Tag.propTypes = {
  title: PropTypes.string,
};
