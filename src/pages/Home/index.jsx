import variables from "../../utils/variables";
import backgroundLarge from "../../assets/home-background-large.png";
import backgroundSmall from "../../assets/home-background-small.png";
import Banner from "../../components/Banner";
import styled from "styled-components";
import RentalCard from "../../components/RentalCard";
import { useFetch } from "../../utils/hooks";
import Loader from "../../components/Loader";
import RefreshError from "../../components/RefreshError";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(
    100vh - ${variables.height.footer}px - ${variables.height.headerSmall}px
  );

  @media (min-width: 1024px) {
    min-height: calc(
      100vh - ${variables.height.footer}px - ${variables.height.headerLarge}px
    );
  }
`;

const RentalCardList = styled.div`
  margin: 22px 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  flex: 1;

  @media (min-width: 1024px) {
    margin: 43px 100px;
    background-color: #f7f7f7;
    padding: 56px 50px;
    border-radius: 25px;
    row-gap: 50px;
    column-gap: 60px;
  }
`;

const Home = () => {
  const isDesktopDevice = window.screen.width >= variables.breakpoint.desktop;
  const backgroundHomeImg = isDesktopDevice ? backgroundLarge : backgroundSmall;
  const height = isDesktopDevice
    ? `${variables.height.bannerHomeLarge}px`
    : `${variables.height.bannerHomeSmall}px`;

  const { data: rentalList, isLoading, hasError } = useFetch(`rentals.json`);

  return (
    <HomeContainer>
      <Banner
        source={backgroundHomeImg}
        height={height}
        text={"Chez vous, partout et ailleurs"}
        radius={"10px"}
      />

      <RentalCardList>
        {isLoading ? (
          <Loader></Loader>
        ) : hasError ? (
          <RefreshError></RefreshError>
        ) : (
          rentalList.map((rental) => (
            <RentalCard
              key={rental.id}
              img={rental.cover}
              title={rental.title}
            />
          ))
        )}
      </RentalCardList>
    </HomeContainer>
  );
};

export default Home;
