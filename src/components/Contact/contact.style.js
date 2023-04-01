import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
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
`;
export const FormH1 = styled.h1`
  font-size: 45px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-bottom: 50px;
  color: #f5f5f5;
`;
export const MiniDiv = styled.div`
  width: 100%;
  display: flex;
`;
export const SInput = styled.input`
  width: 50%;
  margin: 10px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  outline: none;
  border-radius: 10px;
  border: none;
`;

export const STextArea = styled.textarea`
  width: 98%;
  margin: 10px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  outline: none;
  border-radius: 10px;
  border: none;
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
  margin-top: 20px;

  &:hover {
    /* transition: all 0.5s ease; */
    background-color: #324936;
    color: #f5f5f5;
    border: 2px solid #f5f5f5;
  }
`;
