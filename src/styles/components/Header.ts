import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--light-background);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight:400;
  top: 0;
  height: 55px;
  font-size: 0.8rem;

`;

export const MenuBar = styled.div`
height:80vh;
width:9rem;
position:absolute;
display:flex;
flex-direction:column;
padding:5px;
border-radius:8px;
border:1px solid #101011;
background-color: var(--light-background);
top:1rem;
left:21.9em;
transform:translate(-50%, 4%);
z-index:33;
color:white;
  h5{
    color:gray;
    margin:10px 10px;
  }
  button{
    text-align:left;
    padding:0.2rem;
    font-size:0.8em;
    margin:0 5px;
    background:none;
    color:white;

    height:36px;
    border-radius:5px;
    :hover{
      background-color:#3a3a3d;
    }
  }


`;

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  font-weight:400;
 
  ul {
    margin:0;
    padding-left:10px;

    li {
      list-style-type: none;
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      font-weight:400;
      a {
        :hover {
          color: #a970ff;
        }
      }
     
    }
  }
`;
export const MiddleMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;

  div {
    display: flex;
    margin:10px 0 10px;
    align-items: center;
    border-radius: 8px;
    background-color: #29292b;
    width: 85%;

    label[for='search'] {
      position: absolute;
      top: -2000px;
    }

    input {
      height:1.6rem !important;
      width: 100%;
      background-color: #464648;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
      padding-left: 0.6rem!important;
      padding-top: .5rem!important;
    padding-bottom: .5rem!important;
      color: var(--text);
      font-size:0.7rem;
      font-weight:500;
      :focus{
        outline:  #a970ff;
        border:1px solid #a970ff;
        background-color:black;
        font-weight:400;
      }
      ::placeholder {
        color: #bababb;
      }
    }

    svg {
      margin: 0 8px;
      fill: #5a5a5c;
    }
  }
`;
export const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin-right:10px;
  svg {
    fill: whitesmoke;
  }
  span{
 border-radius:99px;
 border:2px solid black;
 width:10px;
  height:10px;
  top:50%;
  left:0;
  transform:translate(-100%, 80%);


  background-color:#00f593;
  z-index:102;
}
`;


export const AccountContainer = styled.i`
cursor: pointer;
padding:0;



`
