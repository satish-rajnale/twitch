import { FiSearch } from "react-icons/fi";
import { CgCrown } from "react-icons/cg";
import { BsThreeDots, BsChatSquare } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import IconButton from "./smallComps/IconButton";
import ToolTip from "./smallComps/ToolTip/ToolTip";

import {
  AccountContainer,
  Container,
  LeftMenu,
  MiddleMenu,
  RightMenu,
} from "../styles/components/Header";
import MyButton from "./Button";
import { useState } from "react";
import GlobalMenu from "./smallComps/GlobalMenu";
// import { ToolTip.ToolTipContainer, ToolTipText } from "./smallComps/ToolTip/style";

const Header: React.FC = () => {
  const [isGlobalMenuOpen, setGlobalMenuOpen] = useState(false);

  const openMenu = () => {
    setGlobalMenuOpen(!isGlobalMenuOpen);
   
  };

  return (
    <Container >
      <LeftMenu>
        <img src="/favicon.svg" alt="Twitch Clone" width="32" height="32" />
        <ul>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">ESports</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
        </ul>

        <button
          onClick={openMenu}
          style={{ background: "none", width: "30px" }}
        >
          <IconButton>
            {" "}
            <BsThreeDots style={{ color: "white" }} />
          </IconButton>
        </button>
        {isGlobalMenuOpen && <GlobalMenu id="GlobalMenu"/>}
      </LeftMenu>
      <MiddleMenu>
        <div>
          <input
            autoComplete="off"
            id="search"
            type="text"
            placeholder="Search"
            onFocus={()=> setGlobalMenuOpen(false)}
          />
          <label aria-label="search" htmlFor="search">
            Search
          </label>
          <FiSearch
            size={27}
            color={"gray"}
            style={{
              backgroundColor: "none",
              fill: "none",
              fontWeight: "bolder",
            }}
          />
        </div>
      </MiddleMenu>
      <RightMenu>
        <ToolTip>
          <IconButton>
            <AiOutlineInbox size={22} />
          </IconButton>
          <ToolTip.ToolTipText style={{ left: "-1.6em" }}>Notifications</ToolTip.ToolTipText>
        </ToolTip>

        <ToolTip>
          <IconButton>
            <BsChatSquare size={18} />
          </IconButton>
          <ToolTip.ToolTipText style={{}}>Chats</ToolTip.ToolTipText>
        </ToolTip>

        <ToolTip>
          <IconButton>
            <CgCrown size={24} />
          </IconButton>
          <ToolTip.ToolTipText style={{ left: "0.3em" }}>Bits</ToolTip.ToolTipText>
        </ToolTip>

    
        <MyButton buttonType="secondary">Log In</MyButton>
        <MyButton buttonType="primary">Sign Up</MyButton>
        <AccountContainer>
          <FaUserCircle size={34} color="#625f5f" fill="#625f5f" />
        </AccountContainer>
        <span></span>
      </RightMenu>
    </Container>
  );
};

export default Header;
