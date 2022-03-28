import styled, { css } from "styled-components";
import { Ul, Li } from "/src/components/styled";
import Check from "/src/assets/check.svg";

export const StyledProductsChoice = styled.div`
  width: 353px;
  height: 355px;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const StyledUl = styled(Ul)`
  position: relative;
  margin-top: 12px;
`;

export const StyledLi = styled(Li)`
  padding-top: 15px;
  padding-bottom: 14px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    right: 16px;
    top: 0;
    height: 24px;
    width: 24px;
    background-color: ${(props) => (props.$isChecked ? "#FC9B27" : "#F7F7F7")};
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.$isChecked &&
    `
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 20px;
      top: 6px;
      height: 16px;
      width: 16px;
      background-image: url(${Check});
      background-repeat: no-repeat;
    }
  `}
`;
