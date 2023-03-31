import React from "react";
import { MainDiv, SButton, SForm, SInput, SLabel } from "./contact.style";

export default function Contact() {
  return (
    <>
      <MainDiv>
        <SForm>
          <SLabel>Name</SLabel>
          <SInput></SInput>
          <SLabel>Email</SLabel>
          <SInput></SInput>
          <SLabel>Message</SLabel>
          <SInput></SInput>
          <SButton>Submit</SButton>
        </SForm>
      </MainDiv>
    </>
  );
}
//
