import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/colors";
import variables from "../../utils/variables";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: ${colors.primary};
  height: calc(
    100vh - ${variables.height.footer}px - ${variables.height.headerSmall}px
  );
  padding: 0 36px 40px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    height: calc(
      100vh - ${variables.height.footer}px - ${variables.height.headerLarge}px
    );
  }
`;

const ErrorTitle = styled.h1`
  font-size: 96px;
  font-weight: 700;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 288px;
  }
`;

const ErrorText = styled.p`
  font-size: 18px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const ErrorRedirection = styled(Link)`
  text-decoration-color: ${colors.primary};
  font-size: 14px;
  color: ${colors.primary};
  text-decoration-color: ${colors.primary};

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Error = () => (
  <ErrorContainer>
    <ErrorTitle>404</ErrorTitle>
    <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
    <ErrorRedirection to="/">Retourner sur la page d’accueil</ErrorRedirection>
  </ErrorContainer>
);

export default Error;
