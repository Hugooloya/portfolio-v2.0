import { NavbarContainer, SLogo, SButton, SLink } from "./navbar.style.js";

export default function Navbar() {
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
