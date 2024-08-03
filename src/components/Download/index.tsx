import React from "react";
import styled from "styled-components";

import { Container } from "../Container";
import { SectionLabel, SectionTitle, Text } from "../Typography";
import { Button } from "../Button";

export const Download = ({ id }: { id?: string }) => {
  return (
    <DownloadContainer id={id}>
      <Content>
        <CustomContainer>
          <Detail>
            <SectionLabel>Download</SectionLabel>
            <SectionTitle>
              A New Way To More Incredible Collaborations
            </SectionTitle>
            <ButtonContainer>
              <Button primary icon="/icons/windows.png">
                Download For Windows
              </Button>
              <Button primary icon="/icons/macos.png">
                Download For MacOs
              </Button>
            </ButtonContainer>
            <QRContainer>
              <Text weight="semiBold">QR For Mobile</Text>
              <img src="/images/qr.png" alt="qr code" />
            </QRContainer>
          </Detail>
          <img
            className="img-download"
            src="/images/download.png"
            alt="download"
          />
        </CustomContainer>
      </Content>
      <Gradient5 />
    </DownloadContainer>
  );
};

const DownloadContainer = styled.section`
  position: relative;
  min-height: 600px;

  background-size: cover !important;
  background-position: center;
  background-image: url(/images/bg-download.png);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 0.97) 21%,
      rgba(0, 0, 0, 0.97) 100%
    );
  }
`;

const Content = styled.div`
  z-index: 5;
  position: absolute;
  padding: 50px 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const CustomContainer = styled(Container)`
  position: relative;
  display: flex;
  gap: 40px;

  & .img-download {
    position: absolute;
    right: -140px;
  }
`;
const Detail = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: start;
`;

const ButtonContainer = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 10px;
`;

const QRContainer = styled.div`
  margin-left: 170px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Gradient5 = styled.div`
  z-index: 4;
  width: 477px;
  height: 307px;

  border-radius: 477px;
  background: #393079;
  filter: blur(200px);

  position: absolute;
  right: 267px;
  bottom: 34px;
`;
