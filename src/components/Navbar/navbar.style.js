import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100% auto;
  height: 80px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SLogo = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: #324936;
`;
export const SButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  border: 2px solid #324936;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #324936;
  cursor: pointer;

  &:hover {
    transition: all 0.5s ease;
    background-color: #324936;
    color: #f5f5f5;
  }
`;
