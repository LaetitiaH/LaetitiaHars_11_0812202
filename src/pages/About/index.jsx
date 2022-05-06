import backgroundLarge from "../../assets/background-large.png";
import backgroundSmall from "../../assets/background-small.png";
import Banner from "../../components/Banner";
import ExpansionPanel from "../../components/ExpansionPanel";
import variables from "../../utils/variables";
import styled from "styled-components";
import { aboutList } from "../../utils/content-text";

const AboutContainer = styled.div`
  min-height: calc(
    100vh - ${variables.height.footer}px - ${variables.height.headerSmall}px
  );
  
  @media (min-width: 1024px) {
    min-height: calc(
      100vh - ${variables.height.footer}px - ${variables.height.headerLarge}px
    );
`;

const AboutContent = styled.div`
  margin: 19px 20px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 1024px) {
    margin: 33px 210px 33px;
    row-gap: 33px;
  }
`;

const About = () => {
  const isDesktopDevice = window.screen.width >= variables.breakpoint.desktop;
  const backgroundImg = isDesktopDevice ? backgroundLarge : backgroundSmall;
  const height = isDesktopDevice ? "47px" : "30px";

  return (
    <AboutContainer>
      <Banner source={backgroundImg} />
      <AboutContent>
        {aboutList.map((item) => (
          <ExpansionPanel
            key={item.id}
            height={height}
            title={item.title}
            text={item.content}
          />
        ))}
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
