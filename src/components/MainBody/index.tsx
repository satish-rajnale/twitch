import React from "react";
import { Container, SideBar } from "./MainBody";
import { FaUserCircle } from "react-icons/fa";

import { AccountContainer } from "../../styles/components/Header";
import ViewSection from "../ViewSection";
export default function MainBody() {
  const userArr = [1, 2, 3, 4, 5];
  return (
    <Container>
      <SideBar>
        {userArr.map((user) => (
          <AccountContainer key={user} style={{ marginBottom: "20px" }}>
            <FaUserCircle size={34} color="#625f5f" fill="#625f5f" />
          </AccountContainer>
        ))}
      </SideBar>
      <ViewSection />
    </Container>
  );
}
