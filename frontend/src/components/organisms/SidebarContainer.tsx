import { Card, Elevation } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";

const RightDiv = styled.div`
  align-self: right;
  background-color: grey;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;
`;
const StyledCard = styled(Card)`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;
const SidebarContainer: React.FC = ({ children }) => {
  return (
    <RightDiv>
      <StyledCard elevation={Elevation.TWO}>{children}</StyledCard>
    </RightDiv>
  );
};
export default SidebarContainer;
