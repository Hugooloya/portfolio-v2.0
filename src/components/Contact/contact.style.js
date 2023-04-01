import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 576px) {
  }
`;

export const SForm = styled.form`
  width: 50%;
  height: 600px;
  background-color: #324936;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 35px;
  margin-top: 100px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 576px) {
    width: 90%;
    height: 500px;
    margin-top: 50px;
  }
`;

export const FormH1 = styled.h1`
  font-size: 45px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 50px;
  color: #f5f5f5;

  @media screen and (max-width: 576px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const MiniDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SInput = styled.input`
  width: 48%;
  padding: 10px;
  font-size: 20px;
  outline: none;
  border-radius: 10px;
  border: none;
  margin-bottom: 25px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const STextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  outline: none;
  border-radius: 10px;
  border: none;

  @media screen and (max-width: 576px) {
  }
`;

export const SButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  color: #324936;
  cursor: pointer;
  margin-top: 35px;
  border: none;
  background-color: #f5f5f5;

  &:hover {
    background-color: #324936;
    color: #f5f5f5;
    border: 2px solid #f5f5f5;
  }

  @media screen and (max-width: 576px) {
    height: 120px;
  }
`;
