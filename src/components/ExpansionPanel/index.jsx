import styled from "styled-components";
import PropTypes from "prop-types";
import arrowUp from "../../assets/up_arrow.png";
import arrowDown from "../../assets/down_arrow.png";
import { useState } from "react";
import colors from "../../utils/colors";

const ExpansionPanelHeader = styled.div`
  height: ${({ height }) => height};
  width: 100%;
  background-color: #ff6060;
  color: #ffffff;
  font-size: 13px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Title = styled.span`
  margin-left: 11px;

  @media (min-width: 1024px) {
    margin-left: 18px;
  }
`;

const ArrowButton = styled.button`
  height: 8px;
  width: 15px;
  margin-right: 10px;
  background-color: unset;
  border: unset;
  padding: 0;
  cursor: pointer;
  display: flex;

  @media (min-width: 1024px) {
    height: 13px;
    width: 23px;
    margin-right: 16px;
  }
`;

const Arrow = styled.img`
  height: 100%;
  width: 100%;
`;

const ExpansionPanelContent = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  color: ${colors.primary};
  font-size: 12px;
  padding: 17px 11px 10px;
  border-radius: 5px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const ExpansionPanel = ({ height, title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <ExpansionPanelHeader height={height}>
        <Title>{title}</Title>
        <ArrowButton onClick={() => setIsExpanded(!isExpanded)} type="button">
          <Arrow src={isExpanded ? arrowUp : arrowDown} />
        </ArrowButton>
      </ExpansionPanelHeader>
      {isExpanded && <ExpansionPanelContent>{text}</ExpansionPanelContent>}
    </div>
  );
};

export default ExpansionPanel;

ExpansionPanel.propTypes = {
  height: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ExpansionPanel.defaultProps = {
  height: "30px",
};
