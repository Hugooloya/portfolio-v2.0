import React, { useState, useRef } from "react";
import {
  FormH1,
  MainDiv,
  MiniDiv,
  SButton,
  SForm,
  SInput,
  STextArea,
} from "./contact.style";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xnj2b7f",
        "template_c6iu8m5",
        form.current,
        "MZ2iYBvAGbNgqXpVg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <MainDiv>
        <SForm ref={form} onSubmit={sendEmail}>
          <FormH1>How can I help you today?</FormH1>
          <MiniDiv>
            <SInput
              type="text"
              name="user_name"
              placeholder="Name"
              required
              autoFocus
            ></SInput>
            <SInput
              type="email"
              name="user_email"
              placeholder="Email"
              required
            ></SInput>
          </MiniDiv>
          <STextArea
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></STextArea>
          <SButton type="submit" value="Send">
            Submit
          </SButton>
        </SForm>
      </MainDiv>
    </>
  );
}
