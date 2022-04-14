import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import colors from "../../utils/colors";

const HomeLogo = styled.img`
  height: 47px;

  @media (min-width: 1024px) {
    height: 68px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: 1024px) {
    padding: 40px 100px 80px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  column-gap: 10px;

  .active {
    text-decoration: underline;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const links = [
  { name: "Accueil", path: "/" },
  { name: "A propos", path: "/about" },
];

const Header = () => (
  <NavContainer>
    <Link to="/">
      <HomeLogo src={logo} />
    </Link>
    <LinkContainer>
      {links.map((link, index) => (
        <StyledLink key={index} to={link.path}>
          {link.name}
        </StyledLink>
      ))}
    </LinkContainer>
  </NavContainer>
);

export default Header;
