import styled from "styled-components";
import { Img, P } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const StyledProductCard = styled.article`
  width: 727px;
  height: 288px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

export const CardWrapper = styled.div`
  text-align: left;
  font-size: 14px;
  line-height: 21px;
`;

export const Image = styled(Img)`
  width: 248px;
  height: 248px;
  object-fit: cover;
  margin-right: 20px;
`;

export const Text = styled(P)`
  margin-top: 16px;
  margin-bottom: 14px;

  & p {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const Price = styled(P)`
  background-color: ${(props) => props.theme.backgroundColorBlue};
  display: block;
  font-weight: 700;
  padding: 4px 8px;
  width: max-content;
  margin-top: 14px;
`;
