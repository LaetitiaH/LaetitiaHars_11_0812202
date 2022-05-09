import backgroundLarge from "../../assets/background-large.png";
import backgroundSmall from "../../assets/background-small.png";
import Banner from "../../components/Banner";
import ExpansionPanel from "../../components/ExpansionPanel";
import styled from "styled-components";
import { aboutList } from "../../utils/content-text";
import { useContext } from "react";
import { DeviceContext } from "../../utils/context";

const AboutContent = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 1024px) {
    margin: 33px 0 33px;
    row-gap: 33px;
  }
`;

const About = () => {
  const { device } = useContext(DeviceContext);
  const backgroundImg =
    device === "desktop" ? backgroundLarge : backgroundSmall;
  const height = device === "desktop" ? "47px" : "30px";

  return (
    <div className="container">
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
    </div>
  );
};

export default About;
