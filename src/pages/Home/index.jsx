import variables from "../../utils/variables";
import backgroundLarge from "../../assets/home-background-large.png";
import backgroundSmall from "../../assets/home-background-small.png";
import Banner from "../../components/Banner";
import styled from "styled-components";
import RentalCard from "../../components/RentalCard";
import { useFetch } from "../../utils/hooks";
import Loader from "../../components/Loader";
import RefreshError from "../../components/RefreshError";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DeviceContext } from "../../utils/context";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RentalCardList = styled.div`
  margin: 22px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  flex: 1;

  @media (min-width: 1024px) {
    margin: 43px 0;
    background-color: #f7f7f7;
    padding: 56px 50px;
    border-radius: 25px;
    row-gap: 50px;
    column-gap: 60px;
  }
`;

const RentalLink = styled(Link)`
  flex: 1;
`;

const Home = () => {
  const { device } = useContext(DeviceContext);
  const backgroundHomeImg =
    device === "desktop" ? backgroundLarge : backgroundSmall;
  const height =
    device === "desktop"
      ? `${variables.height.bannerHomeLarge}px`
      : `${variables.height.bannerHomeSmall}px`;

  const { data: rentalList, isLoading, hasError } = useFetch(`rentals.json`);

  return (
    <HomeContainer className="container">
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
            <RentalLink to={`/${rental.id}`} key={rental.id}>
              <RentalCard img={rental.cover} title={rental.title} />
            </RentalLink>
          ))
        )}
      </RentalCardList>
    </HomeContainer>
  );
};

export default Home;
