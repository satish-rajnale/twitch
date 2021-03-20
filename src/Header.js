import React from 'react'
import styled from 'styled-components'
const Header = () => {
    return (
        <HeaderDiv className="header">
            <HeaderLeft className="header_left">
                <img className="header_logo"
                     src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
                     alt="twitch logo"/>
                
                <h2>Browse</h2>
                <div className="header_verticalLine"></div>
                <h3>Esports</h3>
                <h2>Music</h2>
            </HeaderLeft>

            <HeaderCenter >
                <InputContainer >
                <input className="input" placeholder="Search"/>
                
                <i class="fas fa-search  fa-2x"/>
                </InputContainer>
            </HeaderCenter>

            <div className="header_right">

            </div>
        </HeaderDiv>
    )
}

export default Header;


const HeaderDiv = styled.div`
display:flex;
flex:1;
width:100%;
height:100px;
align-items:center;

`;
const HeaderLeft=styled.div`
flex:1;

display:flex;
.header_logo{
    
    height:40px;
    width:40px;

}
`;

const HeaderCenter = styled.div``;

const InputContainer = styled.div`
width:400px;

height:50px;
display:flex;
justify-content:space-around;
align-items:center;


>input{
    height:100% ;
    width:100%;
    outline:none;
    border:none;
    font-size:18px;
}

>i{
    background-color:gray;
    font-size:30px;
    margin-right:7px;
   opacity:0.3;
}

`;



