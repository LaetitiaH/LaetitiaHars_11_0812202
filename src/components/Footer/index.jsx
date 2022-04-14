import styled from "styled-components";
import { Link } from "react-router-dom";
import logo_white from "../../assets/logo_white.png";

const FooterContainer = styled.div`
  height: 209px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  color: #ffffff;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0 30px;
  box-sizing: border-box;
`;

const HomeLogoFooter = styled.img`
  height: 40px;
`;

const FooterText = styled.div`
  font-size: 12px;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <HomeLogoFooter src={logo_white} />
    </Link>
    <FooterText>© 2020 Kasa. All rights reserved</FooterText>
  </FooterContainer>
);

export default Footer;
