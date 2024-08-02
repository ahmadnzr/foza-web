import styled, { css } from "styled-components";

import {
  AboutUs,
  Button,
  Container,
  Download,
  ExploreSection,
  Feature,
  ContactUs,
  Heading,
  Text,
  Footer,
} from "./components/";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Hero>
        <Content>
          <Gradient3 />
          <Gradient2 />
          <Container>
            <Gradient />
            <Navbar />
            <HeroContent>
              <Heading type="h1">
                Experience a New Face <br /> Of{" "}
                <label className="styled">Advanced Technology</label>
              </Heading>
              <Box>
                <Text size="xs">10 in 1 Smart Solution for New Generation</Text>
              </Box>
              <ButtonContainer>
                <Button primary>See Product</Button>
                <Button>Chat Us Now</Button>
              </ButtonContainer>
            </HeroContent>
            <HeroProduct>
              <ProductInch $position={{ top: "160px", right: "-120px" }}>
                <label className="text">65 inch</label>
              </ProductInch>
              <ProductInch $position={{ bottom: "110px", right: "-120px" }}>
                <label className="text">65 inch</label>
              </ProductInch>
              <ProductInch $position={{ top: "160px", left: "-150px" }}>
                <label className="text">65 inch</label>
              </ProductInch>
              <ProductInch $position={{ bottom: "110px", left: "-150px" }}>
                <label className="text">65 inch</label>
              </ProductInch>
              <img
                className="product-img"
                src="/images/products/65.png"
                alt="65ich"
              />
            </HeroProduct>
          </Container>
        </Content>
      </Hero>
      <ExploreSection />
      <AboutUs />
      <Feature />
      <Download />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

const Hero = styled.section`
  content: "";
  width: 100%;
  min-height: 1100px;
  position: relative;

  background-size: cover !important;
  background-position: center;
  background-image: url(/images/bg1.png);

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
      rgba(2, 0, 36, 0.99) 21%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const HeroProduct = styled.div`
  width: 776px;
  margin: 0 auto;
  position: relative;

  & .product-img {
    height: 499px;
    width: 776px;
    object-fit: contain;
  }
`;

const ProductInch = styled.div<{
  $position: { top?: string; left?: string; bottom?: string; right?: string };
}>`
  ${(props) => css`
    position: absolute;
    top: ${props.$position.top};
    bottom: ${props.$position.bottom};
    left: ${props.$position.left};
    right: ${props.$position.right};
    height: 86px;
    padding: 10px;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 15px;
    border: 1px solid #3b7bb9;
    background: rgba(59, 123, 185, 0.1);

    & .text {
      color: #fff;
      font-size: 20px;
      font-weight: 800;
    }
  `}
`;

const HeroContent = styled.div`
  text-align: center;

  ${(props) => css`
    & label.styled {
      text-shadow: ${props.theme.color.gradient1};
      background: linear-gradient(180deg, #b07cec 21.25%, #3b7bb9 79.93%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;

const Box = styled.div`
  width: 396px;
  height: 35px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid #3b7bb9;
  background: rgba(59, 123, 185, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Gradient3 = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 400px;
  width: 1018px;
  height: 365px;
  flex-shrink: 0;

  border-radius: 1018px;
  background: #393079;
  filter: blur(200px);
`;

const Gradient = styled.div`
  position: absolute;
  left: 200px;
  width: 33px;
  height: 288px;
  transform: rotate(25.269deg);
  flex-shrink: 0;
  border-radius: 288px;
  background: #3b7bb9;
  filter: blur(80px);
`;

const Gradient2 = styled.div`
  position: absolute;
  right: 0;
  width: 406px;
  height: 406px;
  flex-shrink: 0;

  border-radius: 406px;
  background: #3b7bb9;
  filter: blur(200px);
`;
