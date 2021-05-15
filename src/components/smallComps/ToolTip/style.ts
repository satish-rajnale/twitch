import styled from "styled-components";

export const ToolTipContainer = styled.div`
  position: relative;
  display: block;
  align-items: center;

  :hover > div {
    visibility: visible;
  }
`;

export const ToolTipText = styled.div`
  visibility: hidden;
  font-size: 15px;

  font-weight: 700;
  padding: 6px;
  margin-top: 8px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 3px;

  /* Position the tooltip */
  position: absolute;
  z-index: 12;
`;
