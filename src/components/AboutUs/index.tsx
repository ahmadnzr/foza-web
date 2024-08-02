import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { SectionLabel, SectionTitle, Text } from "../Typography";
import { Button } from "../Button";

const AboutContainer = styled(Container)`
  position: relative;
  padding: 50px 0;
  height: 500px;
`;
const Content = styled.div`
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 40px;
`;
const Detail = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: start;
`;

const Banner = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`;

const Card = styled.div<{ $url: string }>`
  flex: 1;
  display: flex;
  height: 100%;
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

const TitleContainer = styled.div`
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 13px;
  border: 1px solid #3b7bb9;
  background: linear-gradient(
    358deg,
    rgba(59, 123, 185, 0.5) 1.93%,
    rgba(90, 48, 138, 0.5) 98.46%
  );
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
`;

const Gradient5 = styled.div`
  z-index: 4;
  width: 477px;
  height: 307px;

  border-radius: 477px;
  background: #393079;
  filter: blur(200px);

  position: absolute;
  left: 267px;
  bottom: 34px;
`;

export const AboutUs = () => {
  const banners = [
    {
      title: "Excellent Collaboration",
      img: "/images/banner1.png",
      desc: "experience the simplest and most efficient way for meeting with interactive display at your hand. turn your dream collaboration into reality NOW",
    },
    {
      title: "Innovative Solution",
      img: "/images/banner2.png",
      desc: "experience the simplest and most efficient way for meeting with interactive display at your hand. turn your dream collaboration into reality NOW",
    },
    {
      title: "Best Pick for All Your Needs",
      img: "/images/banner3.png",
      desc: "experience the simplest and most efficient way for meeting with interactive display at your hand. turn your dream collaboration into reality NOW",
    },
  ];
  return (
    <AboutContainer>
      <Content>
        <Detail>
          <SectionLabel>About Us</SectionLabel>
          <SectionTitle>Wanna Know More About FOZA?</SectionTitle>
          <Text size="xs" style={{ lineHeight: "30px" }}>
            FOZA is an advanced & innovative brand that CARES about any
            collaborations in daily business activities. We focus on designing
            interactive & collaborative solutions to complete and maximize
            people's performances in business and education
          </Text>
          <Button primary>Chat Us Now</Button>
        </Detail>
        <Banner>
          {banners.map((item, i) => (
            <Card $url={item.img} key={i}>
              <TitleContainer>
                <Text size="sm" weight="semiBold">
                  {item.title}
                </Text>
                <Text id="desc" size="xs">
                  {item.desc}
                </Text>
              </TitleContainer>
            </Card>
          ))}
        </Banner>
      </Content>
      <Gradient5 />
    </AboutContainer>
  );
};
