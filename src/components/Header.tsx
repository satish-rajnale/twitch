import { FiSearch } from "react-icons/fi";
import { CgCrown } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { BsChatSquare } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import {
  MenuBar,
  AccountContainer,
  IconContainer,
  Container,
  LeftMenu,
  MiddleMenu,
  RightMenu,
} from "../styles/components/Header";
import Button from "./Button";
import { useState } from "react";

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
          <IconContainer>
            {" "}
            <BsThreeDots style={{ color: "white" }} />
          </IconContainer>
        </button>
        {isOpen && (
          <MenuBar>
            <h5>GENERAL</h5>
            <button>About</button>
            <button> Advertisers </button>
            <button> Blog </button>
            <button> Developers </button>
            <button> Download Apps </button>
            <button> Gift Card </button>
            <button> IGDB </button>
            <button> Jobs </button>
            <button> Partners </button>
            <button> Music on Twitch </button>
            <button> Loot Cave - Store </button>
            <button> Press </button>
            <button> Turbo </button>
          </MenuBar>
        )}
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
        <IconContainer>
          <AiOutlineInbox size={22} />
        </IconContainer>
        <IconContainer>
          <BsChatSquare size={18} />
        </IconContainer>
        <IconContainer>
          {" "}
          <CgCrown size={24} />
        </IconContainer>
        <Button buttonType="secondary">Log In</Button>
        <Button buttonType="primary">Sign Up</Button>
        <AccountContainer>
          <FaUserCircle size={34} color="#625f5f" fill="#625f5f" />
        </AccountContainer>
        <span></span>
      </RightMenu>
    </Container>
  );
};

export default Header;
