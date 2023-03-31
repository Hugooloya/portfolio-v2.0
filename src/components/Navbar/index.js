import { NavbarContainer, SLogo, SButton, SLink } from "./navbar.style.js";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);

  const changeState = () => {
    setShow(!show);
  };

  return (
    <NavbarContainer>
      <SLink to="/">
        <SLogo>hugooloya</SLogo>
      </SLink>
      <SLink to="/Contact">
        <SButton>Say Hello</SButton>
      </SLink>
    </NavbarContainer>
  );
}
