import styled from "styled-components";
import colors from "../../utils/colors";

const Text = styled.div`
  color: ${colors.primary};
  font-size: 24px;
  align-self: center;
`;

const RefreshError = () => {
  return <Text>Une erreur est survenue, veuillez rafraichir la page.</Text>;
};

export default RefreshError;
