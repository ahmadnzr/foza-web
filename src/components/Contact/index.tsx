import React from "react";
import styled, { css } from "styled-components";

import { Container } from "../Container";
import { SectionLabel, SectionTitle } from "../Typography";
import { Button } from "../Button";
import { mobile } from "../../helpers/theme/breakpoint";

export const ContactUs = ({ id }: { id: string }) => {
  return (
    <ContactContainer id={id}>
      <img className="contact-img" src="/images/banner1.png" alt="contact" />
      <Content>
        <Detail>
          <SectionLabel>Contact Us</SectionLabel>
          <SectionTitle>
            Join Us and Get More Informatoin with Our Support
          </SectionTitle>
          <Button style={{ marginTop: "20px" }} primary>
            chat Us Now
          </Button>
        </Detail>
      </Content>
    </ContactContainer>
  );
};

const ContactContainer = styled(Container)`
  position: relative;
  min-height: 500px;
  overflow: hidden;

  & .contact-img {
    position: absolute;
    top: 60px;
    width: 737px;
    height: 374px;
  }

  ${mobile(css`
    min-height: 50vh;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;

    & .contact-img {
      position: static;
      padding: 20px;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  `)}
`;

const Content = styled.div`
  z-index: 5;
  padding: 50px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;

  ${mobile(css`
    position: static;
    padding: 20px 0;
  `)}
`;

const Detail = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: start;

  ${mobile(css`
    width: 400px;
    gap: 5px;
  `)}
`;
