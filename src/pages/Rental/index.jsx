import styled from "styled-components";
import Gallery from "../../components/Gallery";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import Loader from "../../components/Loader";
import RefreshError from "../../components/RefreshError";
import ExpansionPanel from "../../components/ExpansionPanel";
import Error from "../../components/Error";
import { useContext } from "react";
import { DeviceContext } from "../../utils/context";
import RentalDesktop from "./Rental-desktop";
import RentalMobile from "./Rental-mobile";

const RentalContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? "flex" : "block")};
  justify-content: ${({ isLoading }) => (isLoading ? "center" : "unset")};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 16px 0;
  row-gap: 16px;
  column-gap: 76px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Rental = () => {
  const { data: rentalList, isLoading, hasError } = useFetch("rentals.json");
  const { accommodationId } = useParams();
  const { device } = useContext(DeviceContext);

  if (isLoading) {
    return (
      <RentalContainer className="container" isLoading={isLoading}>
        <Loader></Loader>
      </RentalContainer>
    );
  }

  if (hasError) {
    return (
      <RentalContainer className="container">
        <RefreshError></RefreshError>
      </RentalContainer>
    );
  }

  if (!isLoading && !hasError) {
    const rental = rentalList.find((rental) => rental.id === accommodationId);

    if (rental) {
      const height = device === "desktop" ? "52px" : "30px";
      const heightContent = device === "desktop" ? "250px" : "max-content";
      const fontSize = device === "desktop" ? "18px" : "24px";

      return (
        <RentalContainer className="container">
          <Gallery
            pictures={rental.pictures}
            hasPagination={device === "desktop"}
          ></Gallery>

          {device === "desktop" ? (
            <RentalDesktop rental={rental}></RentalDesktop>
          ) : (
            <RentalMobile rental={rental}></RentalMobile>
          )}

          <DescriptionContainer>
            <ExpansionPanel
              title={"Description"}
              text={rental.description}
              height={height}
              heightContent={heightContent}
              fontSize={fontSize}
            />
            <ExpansionPanel
              title={"Équipements"}
              list={rental.equipments}
              height={height}
              heightContent={heightContent}
              fontSize={fontSize}
            />
          </DescriptionContainer>
        </RentalContainer>
      );
    } else {
      return <Error></Error>;
    }
  }
};

export default Rental;
