import styled from "styled-components";

export const ToolTipContainer  = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
:hover > span {
  visibility: visible;
  
}
`

export const ToolTipText = styled.span`
 visibility: hidden;
  font-size:15px;

  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
`