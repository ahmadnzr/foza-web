import React from "react";
import { Container } from "../Container";
import styled from "styled-components";
import { SectionLabel, SectionTitle, Text } from "../Typography";
import { Button } from "../Button";

const DownloadContainer = styled(Container)`
  position: relative;
  padding: 50px 0;
  height: 500px;

  & .img-download {
    position: absolute;
    right: 0;
  }
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

export const Download = () => {
  return (
    <DownloadContainer>
      <Content>
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
      </Content>
      <img className="img-download" src="/images/download.png" alt="download" />
      <Gradient5 />
    </DownloadContainer>
  );
};
