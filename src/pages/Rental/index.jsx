import styled from "styled-components";
import Gallery from "../../components/Gallery";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import Loader from "../../components/Loader";
import RefreshError from "../../components/RefreshError";
import colors from "../../utils/colors";
import Tag from "../../components/Tag";
import Stars from "../../components/Star";
import Profil from "../../components/Profil";
import ExpansionPanel from "../../components/ExpansionPanel";
import Error from "../../components/Error";
import { useContext } from "react";
import { DeviceContext } from "../../utils/context";

const RentalContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? "flex" : "block")};
  justify-content: ${({ isLoading }) => (isLoading ? "center" : "unset")};
`;

const RentalTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    margin-top: 30px;
  }
`;

const RentalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.primary};
  margin-top: 15px;

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const RentalLocalization = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.primary};
  margin-top: 5px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 13px;
  flex-wrap: wrap;
  row-gap: 5px;

  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    margin-top: 20px;
  }
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
            <RentalTitles>
              <div>
                <RentalTitle>{rental.title}</RentalTitle>
                <RentalLocalization>{rental.location}</RentalLocalization>
              </div>
              <Profil host={rental.host} />
            </RentalTitles>
          ) : (
            <>
              <RentalTitle>{rental.title}</RentalTitle>
              <RentalLocalization>{rental.location}</RentalLocalization>
            </>
          )}

          {device === "mobile" && (
            <TagContainer>
              {rental.tags.map((tag) => (
                <Tag title={tag} key={tag} />
              ))}
            </TagContainer>
          )}

          {device === "desktop" ? (
            <InfoContainer>
              <TagContainer>
                {rental.tags.map((tag) => (
                  <Tag title={tag} key={tag} />
                ))}
              </TagContainer>
              <Stars nbStarsTotal={5} nbStars={+rental.rating} />
            </InfoContainer>
          ) : (
            <InfoContainer>
              <Stars nbStarsTotal={5} nbStars={+rental.rating} />
              <Profil host={rental.host} />
            </InfoContainer>
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
