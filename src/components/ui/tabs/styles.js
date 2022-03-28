import styled from "styled-components";
import { Ul, P } from "/src/components/styled";

export const StyledTabs = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const ButtonTab = styled.button`
  display: block;
  cursor: pointer;
  box-shadow: none;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 21px;
  background-color: ${(props) => (props.active ? "#88AA4D" : "#f6f6f6")};
  border: ${(props) =>
    !props.active ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
  margin-right: 8px;
`;

export const Content = styled(P)`
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  overflow-y: overlay;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
`;
