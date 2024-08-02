import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Container } from "../Container";
import { SectionLabel, SectionTitle } from "../Typography";

const FeatureContainer = styled.section`
  text-align: center;
  padding: 50px 0;
`;

const Slides = styled(Swiper)`
  padding: 20px 0;
  & .swiper-slide {
    width: auto !important;
  }
`;

const Card = styled.div<{ $url: string }>`
  flex: 1;
  display: flex;
  height: 177px;
  width: 251px;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 17px;
  border: 1px solid #3b7bb9;
  transition: 0.3s ease;

  border-radius: 17px;
  border: 1px solid #3b7bb9;
  background: url(${(props) => props.$url}) lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  & #desc {
    display: none;
  }

  &:hover {
    flex: 2;

    & #desc {
      display: inline-block;
    }
  }
`;

export const Feature = () => {
  const slides = [
    "/images/features/audio.png",
    "/images/features/board.png",
    "/images/features/camera.png",
    "/images/features/projection.png",
    "/images/features/projector.png",
    "/images/features/tv.png",
    "/images/features/computer.png",
    "/images/features/projection.png",
    "/images/features/projector.png",
    "/images/features/tv.png",
    "/images/features/digital.png",
    "/images/features/mic.png",
    "/images/features/projection.png",
    "/images/features/projector.png",
    "/images/features/tv.png",
  ];

  return (
    <FeatureContainer>
      <Container>
        <SectionLabel>How It Works</SectionLabel>
        <SectionTitle>Foza Features</SectionTitle>
      </Container>
      <Slides
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 0, // No delay between transitions
          disableOnInteraction: false, // Keep autoplay running even after interactions
        }}
        speed={10000}
        loop
        modules={[Autoplay]}
      >
        {slides.map((item, i) => (
          <SwiperSlide>
            <Card $url={item} key={i} />
          </SwiperSlide>
        ))}
      </Slides>
      <Slides
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 0, // No delay between transitions
          disableOnInteraction: false, // Keep autoplay running even after interactions
        }}
        speed={10000}
        loop
        modules={[Autoplay]}
        dir="rtl"
      >
        {slides.map((item, i) => (
          <SwiperSlide>
            <Card $url={item} key={i} />
          </SwiperSlide>
        ))}
      </Slides>
    </FeatureContainer>
  );
};
