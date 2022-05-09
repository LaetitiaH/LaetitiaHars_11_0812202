import PropTypes from "prop-types";
import arrowBack from "../../assets/arrow_back.png";
import arrowAfter from "../../assets/arrow_after.png";
import { useState } from "react";
import styled, { css } from "styled-components";

const GalleryContainer = styled.div`
  height: 255px;
  box-sizing: border-box;
  position: relative;

  @media (min-width: 1024px) {
    height: 415px;
  }
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;

  @media (min-width: 1024px) {
    border-radius: 25px;
  }
`;

const CommonButtonStyle = css`
  position: absolute;
  height: 14px;
  width: 15px;
  background-color: unset;
  border: unset;
  padding: 0;
  cursor: pointer;

  @media (min-width: 1024px) {
    height: 53px;
    width: 48px;
  }
`;

const ArrowBackButton = styled.button`
  ${CommonButtonStyle}
  left: 3.04%;
  top: 42.75%;
`;

const ArrowAfterButton = styled.button`
  ${CommonButtonStyle}
  right: 3.04%;
  top: 42.75%;
`;

const Arrow = styled.img`
  height: 100%;
  width: 100%;
`;

const GalleryPagination = styled.div`
  position: relative;
  left: 48.95%;
  right: 49.11%;
  bottom: 13.01%;
  font-size: 18px;
  color: #ffffff;
  width: max-content;
`;

const Gallery = ({ pictures, hasPagination }) => {
  const initialPictureIndex = 0;
  const maxPictureIndex = pictures.length - 1;
  const hasMoreThanOnePicture = !!maxPictureIndex;
  const step = 1;

  const [currentIndexPicture, setCurrentIndexPicture] =
    useState(initialPictureIndex);
  const [currentPicture, setCurrentPicture] = useState(
    pictures[initialPictureIndex]
  );

  const updatePicture = (direction) => {
    const newCurrentIndexPicture =
      direction === "before"
        ? currentIndexPicture !== initialPictureIndex
          ? currentIndexPicture - step
          : maxPictureIndex
        : currentIndexPicture === maxPictureIndex
        ? initialPictureIndex
        : currentIndexPicture + step;

    setCurrentIndexPicture(newCurrentIndexPicture);
    setCurrentPicture(pictures[newCurrentIndexPicture]);
  };

  return (
    <GalleryContainer>
      <GalleryImg src={currentPicture} />
      {hasMoreThanOnePicture && (
        <>
          <ArrowBackButton
            type="button"
            onClick={() => {
              updatePicture("before");
            }}
          >
            <Arrow src={arrowBack} />
          </ArrowBackButton>
          <ArrowAfterButton
            type="button"
            onClick={() => {
              updatePicture("after");
            }}
          >
            <Arrow src={arrowAfter} />
          </ArrowAfterButton>
        </>
      )}

      {hasPagination && (
        <GalleryPagination>{`${currentIndexPicture + 1}/${
          maxPictureIndex + 1
        }`}</GalleryPagination>
      )}
    </GalleryContainer>
  );
};

export default Gallery;

Gallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  hasPagination: PropTypes.bool,
};
