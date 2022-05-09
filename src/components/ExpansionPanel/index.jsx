import styled from "styled-components";
import PropTypes from "prop-types";
import arrowUp from "../../assets/up_arrow.png";
import arrowDown from "../../assets/down_arrow.png";
import { useState } from "react";
import colors from "../../utils/colors";

const ExpansionPanelContainer = styled.div`
  flex: 1;
`;

const ExpansionPanelHeader = styled.button`
  height: ${({ height }) => height};
  width: 100%;
  background-color: #ff6060;
  color: #ffffff;
  font-size: 13px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  border: none;
  cursor: pointer;

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

const ArrowContainer = styled.div`
  height: 8px;
  width: 15px;
  margin-right: 10px;
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
  min-height: ${({ height }) => height};
  width: 100%;
  background-color: #f6f6f6;
  color: ${colors.primary};
  font-size: 12px;
  padding: 17px 11px 10px;
  border-radius: 5px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    font-size: ${({ fontSize }) => fontSize};
    padding: 30px 11px 10px;
  }
`;

const ExpansionPanelText = styled.p`
  margin: 0;
  line-height: 142.6%;
`;

const ExpansionPanelList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ExpansionPanelItem = styled.li`
  list-style-type: none;
  height: 18px;

  @media (min-width: 1024px) {
    height: 37px;
  }
`;

const ExpansionPanel = ({
  height,
  title,
  text,
  list,
  heightContent,
  fontSize,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ExpansionPanelContainer>
      <ExpansionPanelHeader
        height={height}
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Title>{title}</Title>
        <ArrowContainer>
          <Arrow src={isExpanded ? arrowUp : arrowDown} />
        </ArrowContainer>
      </ExpansionPanelHeader>
      {isExpanded && (
        <ExpansionPanelContent height={heightContent} fontSize={fontSize}>
          {text && <ExpansionPanelText>{text}</ExpansionPanelText>}
          {list && (
            <ExpansionPanelList>
              {list.map((item, index) => (
                <ExpansionPanelItem key={index}>{item}</ExpansionPanelItem>
              ))}
            </ExpansionPanelList>
          )}
        </ExpansionPanelContent>
      )}
    </ExpansionPanelContainer>
  );
};

export default ExpansionPanel;

ExpansionPanel.propTypes = {
  height: PropTypes.string,
  heightContent: PropTypes.string,
  fontSize: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

ExpansionPanel.defaultProps = {
  height: "30px",
  heightContent: "max-content",
  fontSize: "24px",
};
