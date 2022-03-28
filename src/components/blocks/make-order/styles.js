import styled from "styled-components";

export const StyledMakeOrder = styled.div`
  width: 353px;
  height: 315px;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px 12px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 21px;
  color: #333333;
  margin-top: 24px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 32px;
`;

export const Price = styled.span`
  display: block;
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
  margin-top: 8px;
`;
