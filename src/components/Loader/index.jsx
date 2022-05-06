import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

const LoaderContent = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 200px;
  width: 200px;
  align-self: center;

  @media (min-width: 1024px) {
    height: 200px;
    width: 200px;
  }
`;

const Loader = () => <LoaderContent></LoaderContent>;

export default Loader;
