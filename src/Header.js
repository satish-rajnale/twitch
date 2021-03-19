import React from 'react'
import styled from 'styled-components'
const Header = () => {
    return (
        <HeaderDiv className="header">
            <div className="header_left">
                <img className="header_logo"
                     src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
                     alt="twitch logo"/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header_verticalLine"></div>
                <h3>Esports</h3>
                <h2>Music</h2>
            </div>

            <div className="header_center">
                <InputContainer className="input-container">
                <input className="input" placeholder="Search"/>
                
                <i class="fas fa-search  fa-2x"/>
                </InputContainer>
            </div>

            <div className="header_right">

            </div>
        </HeaderDiv>
    )
}

export default Header;


const HeaderDiv = styled.div`
display:flex;
flex:1;
.header_logo{
    
    height:40px;
    width:40px;

}
`;


const InputContainer = styled.div`
width:400px;

height:50px;
display:flex;
justify-content:space-around;
align-items:center;


>input{
    height:100% ;
    width:90%;
    outline:none;
    border:none;
    font-size:18px;
}

>i{
    width:13%;
    margin-right:7px;
   opacity:0.3;
}

`;



