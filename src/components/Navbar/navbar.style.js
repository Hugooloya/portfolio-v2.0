import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
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
  font-weight: 700;
  font-size: 18px;
  color: #324936;
  cursor: pointer;

  &:hover {
    transition: all 0.5s ease;
    background-color: #324936;
    color: #f5f5f5;
  }

  @media screen and (max-width: 576px) {
    width: 120px;
    height: 40px;
    font-weight: 500;
    font-size: 16px;
    background-color: #324936;
    color: #f5f5f5;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
`;
