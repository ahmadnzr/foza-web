import React from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Container } from "../Container";
import { SectionLabel, SectionTitle, Text } from "../Typography";
import { dataSlide } from "../../helpers/data";

const ExploreContainer = styled(Container)`
  position: relative;
  text-align: center;
  padding: 50px 0;
`;

const Card = styled.div`
  box-sizing: content-box;
  width: 440px;
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  border: 1px solid #3b7bb9;
  background: rgba(59, 123, 185, 0.1);
  transition: 0.3s ease;

  & .card-img {
    width: 423px;
    height: 244px;
    object-fit: cover;
  }

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(90, 48, 138, 0.47) 0%,
      rgba(59, 123, 185, 0.47) 100%
    );
    box-shadow: 0px 4px 60px 0px rgba(90, 48, 138, 0.52);
  }
`;

const Item = styled.div`
  display: flex;
  min-height: 65px;
  padding: 5px 10px;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  border-radius: 7px;
  background: #3b7bb9;

  & .item-icon {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }

  & .item-label {
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  align-self: stretch;
`;

const SwiperContainer = styled(Swiper)`
  padding: 50px 0;
`;

export const ExploreSection = () => {
  return (
    <ExploreContainer>
      <Gradient2 />
      <SectionLabel>Our Categories</SectionLabel>
      <SectionTitle>Explore Us Now</SectionTitle>

      <NavMenu>
        <NavItem $selected>All FOZA</NavItem>
        <NavItem>Interactive Display</NavItem>
        <NavItem>Notebook</NavItem>
        <NavItem>Tablet</NavItem>
      </NavMenu>

      <SwiperContainer
        autoplay
        spaceBetween={30}
        slidesPerView={3}
        modules={[Autoplay]}
        loop
      >
        {dataSlide.map((item, i) => (
          <SwiperSlide key={i}>
            <Card>
              <img className="card-img" src={item.image} alt={item.title} />
              <ItemContainer>
                {item.features.map((feature, j) => (
                  <Item key={j}>
                    <img className="item-icon" src={feature.icon} alt="ok" />
                    <label className="item-label">{feature.label}</label>
                  </Item>
                ))}
              </ItemContainer>
              <Text size="xs" weight="semiBold">
                {item.title}
              </Text>
            </Card>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </ExploreContainer>
  );
};

const NavMenu = styled.div`
  width: 500px;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(Text)<{ $selected?: boolean }>`
  cursor: pointer;
  color: #a8a8a8;
  transition: 0.3s ease;

  ${(props) =>
    props.$selected &&
    css`
      color: #fff;
      font-size: ${props.theme.fontSize.xs};
      text-shadow: 2px 2px 5px #5a308a;
      font-size: ${props.theme.fontSize.sm};
      font-weight: 600;
    `}

  &:hover {
    color: #fff;
  }
`;

const Gradient2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 406px;
  height: 406px;
  flex-shrink: 0;

  border-radius: 406px;
  background: #3b7bb9;
  filter: blur(200px);
`;
