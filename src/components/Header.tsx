import { FiSearch } from "react-icons/fi";
import { CgCrown } from "react-icons/cg";
import { BsThreeDots, BsChatSquare } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import IconButton from "./smallComps/IconButton";
// import ToolTip from "./smallComps/ToolTip/ToolTip";
import {Icon , Popup } from "semantic-ui-react";
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
import { ToolTipContainer, ToolTipText } from "./smallComps/ToolTip/style";

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Container>
      <LeftMenu>
        <img src="/favicon.svg" alt="Twitch Clone" width="32" height="32" />
        <ul>
          <li>
            <a href="#">Following</a>
          </li>
          <li>
            <a href="#">Browse</a>
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
        {isOpen && <GlobalMenu />}
      </LeftMenu>
      <MiddleMenu>
        <div>
          <input
            autoComplete="off"
            id="search"
            type="text"
            placeholder="Search"
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
        <IconButton>
         
          <Popup
            trigger={ <AiOutlineInbox size={22} />}
            content="Notifications"
            style={{color:"black",padding:"5px",fontWeight:700,margin:"6px", backgroundColor:"white" }}
            position='bottom center'
          />
        </IconButton>
        <IconButton>
          <Popup
            trigger={<BsChatSquare size={18} />}
            content="Chat"
            style={{color:"black",padding:"5px",fontWeight:700,margin:"8px", backgroundColor:"white"}}
            position='bottom center'
          />
        </IconButton>
        <IconButton>
          {" "}
          <Popup
            trigger={<CgCrown size={24} />}
            content="Bits"
            style={{color:"black",padding:"5px",fontWeight:700,margin:"6px", backgroundColor:"white" }}
            position='bottom center'
          />
          
        </IconButton>
        {/* <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={
            <Tooltip style={{ background: "red" }} id={`tooltip-bottom`}>
              Tooltip on <strong>bottom</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on</Button>
        </OverlayTrigger> */}
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
