import styled from "styled-components";

// <-----------INTRODUCTION SECTION----------->

export const SIntroContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 600px;
  color: #324936;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 576px) {
    height: 450px;
  }
`;

export const SIntroH1 = styled.h1`
  font-size: 50px;
  font-weight: 500;
  margin-top: 80px;

  @media screen and (max-width: 576px) {
    font-size: 35px;
    margin-top: 60px;
  }
`;

export const SIntroH2 = styled.h2`
  font-size: 25px;
  font-weight: 300;
  margin-top: 30px;

  @media screen and (max-width: 576px) {
    font-size: 18px;
    font-weight: 300;
    margin-top: 15px;
  }
`;

export const SPictureContainer = styled.img`
  margin-top: 90px;
  border-radius: 50%;
  width: 10%;

  @media screen and (max-width: 576px) {
    margin-top: 40px;
    border-radius: 50%;
    width: 40%;
  }
`;

export const BotContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #324936;
`;

export const SArtContainer = styled.img`
  width: 35%;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`;

// <--------------------------BIO SECTION----------->

export const BioContainer = styled.div`
  color: #f5f5f5;
  width: 100%;
  height: 600px;
  background-color: #324936;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    /* height: auto; */
  }
`;

export const SBioDiv = styled.div`
  margin-bottom: 200px;
  width: 50%;

  @media screen and (max-width: 576px) {
    /* margin-bottom: 200px; */
    width: 90%;
  }
`;

export const SDescTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 576px) {
    font-size: 35px;
    font-weight: 500;
  }
`;

export const SDescText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  margin-top: 25px;

  @media screen and (max-width: 576px) {
    font-size: 17px;
    font-weight: 300;
    margin-top: 35px;
  }
`;

// <-----------SKILLS SECTION----------->

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 576px) {
  }
`;

export const SkillsTable = styled.div`
  background-color: #f5f5f5;
  width: 50%;
  border-radius: 30px;
  position: relative;
  bottom: 200px;
  box-shadow: 0 5px 20px -19px;
  display: flex;

  @media screen and (max-width: 576px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

export const SkillDivL = styled.div`
  border-right: 1px solid #324936;
  width: 50%;

  @media screen and (max-width: 576px) {
    border-right: none;
    border-bottom: 1px solid #324936;
    width: 100%;
  }
`;

export const TechTitle = styled.h1`
  color: #324936;
  text-align: center;
  margin: 50px 0px 70px 0px;
  font-size: 45px;
`;

export const TechDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const STechBox = styled.div`
  width: 90%;
  height: 50px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    height: auto;
    margin-bottom: 30px;
  }
`;

export const STechIcon = styled.img`
  width: 10%;
  margin-right: 15px;
`;

export const STechText = styled.h3`
  color: #324936;
  font-weight: 400;
`;

export const SkillDivR = styled.div`
  width: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

// <--------------------------BIO SECTION----------->

export const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #324936;

  @media screen and (max-width: 576px) {
  }
`;

export const SH1 = styled.h1`
  font-size: 45px;
  font-weight: 600;

  @media screen and (max-width: 576px) {
    position: relative;
    bottom: 120px;
  }
`;

export const ProjectDiv01 = styled.div`
  width: 50%;
  margin-top: 150px;
  display: flex;

  @media screen and (max-width: 576px) {
    width: 90%;
    margin-top: -10px;
    flex-direction: column;
  }
`;

export const HContainer = styled.div`
  width: 50%;
  margin-top: 200px;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const SH2 = styled.h2`
  font-size: 35px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 40px;
  }
`;

export const SH3 = styled.h3`
  font-size: 30px;
  font-weight: 400;
  margin-top: 50px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

export const SH4 = styled.h4`
  font-size: 25px;
  font-weight: 300;
  margin-top: 10px;

  @media screen and (max-width: 576px) {
    font-size: 20px;
    font-weight: 300;
    margin-top: 5px;
  }
`;

export const MockContainer = styled.div`
  width: 50%;
  text-align: end;

  @media screen and (max-width: 576px) {
    width: 100%;
    text-align: end;
    margin-top: 50px;
  }
`;

export const SProjectImg01 = styled.img`
  width: 160%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
