import styled, { css } from "styled-components";

import { Container } from "../Container";
import { Text } from "../Typography";
import { mobile } from "../../helpers/theme/breakpoint";

export const Footer = () => {
  return (
    <FooterContainer>
      <Gradient2 />
      <Content>
        <CustomContainer>
          <Left>
            <img className="logo-foot" src="/icons/foza.png" />
            <Text size="xs" style={{ lineHeight: "30px", width: "480px" }}>
              FOZA is an advanced & innovative brand that CARES about any
              collaborations in daily business activities.
            </Text>
            <Socials>
              <Item>
                <img src="/icons/Instagram.png" alt="" />
              </Item>
              <Item>
                <img src="/icons/Facebook.png" alt="" />
              </Item>
              <Item>
                <img src="/icons/tweet.png" alt="" />
              </Item>
            </Socials>
          </Left>
          <Right>
            <RightItem>
              <Text size="sm" weight="semiBold" style={{ textAlign: "center" }}>
                Contact
              </Text>
              <ItemDetail>
                <TextIcon size="xs" weight="medium" $icon="/icons/email.png">
                  fozaworld@gmail.com
                </TextIcon>
                <TextIcon size="xs" weight="medium" $icon="/icons/wa.png">
                  08xxxxxxxxxxxxx
                </TextIcon>
              </ItemDetail>
            </RightItem>
            <RightItem>
              <Text size="sm" weight="semiBold" style={{ textAlign: "center" }}>
                Company
              </Text>
              <ItemDetail style={{ alignItems: "center" }}>
                <Text size="xs" weight="medium">
                  Products
                </Text>
                <Text size="xs" weight="medium">
                  Contact
                </Text>
                <Text size="xs" weight="medium">
                  News & Blogs
                </Text>
              </ItemDetail>
            </RightItem>
          </Right>
        </CustomContainer>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  position: relative;
  min-height: 300px;
  overflow: hidden;

  background-size: cover !important;
  background-position: center;
  background-image: url(/images/bg-footer.png);

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
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  ${mobile(css`
    min-height: 50vh;

    & .logo-foot {
      width: 100px;
      object-fit: cover;
    }
  `)}
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 50px 0;

  z-index: 5;

  ${mobile(css`
    padding: 30px 0;
  `)}
`;

const CustomContainer = styled(Container)`
  display: flex;
  gap: 30px;

  ${mobile(css`
    flex-direction: column;
    gap: 20px;
  `)}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  ${mobile(css`
    gap: 5px;
    padding: 20px;
  `)}
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;

  ${mobile(css`
    gap: 6px;
  `)}
`;

const Item = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border-radius: 15px;
  border: 1px solid #3b7bb9;
  background: rgba(59, 123, 185, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile(css``)}
`;

const Right = styled.div`
  flex: 1;
  border-radius: 20px;
  padding: 0 30px;
  display: flex;
  padding-top: 20px;
  background: rgba(59, 123, 185, 0.1);

  ${mobile(css`
    padding: 0 20px;
    padding-top: 10px;
    margin: 10px;
  `)}
`;

const RightItem = styled.div`
  flex: 1;
`;

const ItemDetail = styled.div`
  width: 250px;
  margin: 18px auto 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 18px;

  ${mobile(css`
    width: 150px;
    margin: 10px auto 0;
    gap: 10px;
  `)}
`;

const TextIcon = styled(Text)<{ $icon: string }>`
  display: flex;
  gap: 12px;
  align-items: center;
  &:before {
    content: "";
    height: 20px;
    width: 20px;
    background: url(${(props) => props.$icon});
  }

  ${mobile(css`
    gap: 8px;
  `)}
`;

const Gradient2 = styled.div`
  position: absolute;
  bottom: -10px;
  right: 50%;
  width: 200px;
  height: 200px;

  border-radius: 150px;
  background: #3b7bb9;
  filter: blur(200px);
`;
