import {
  SIntroContainer,
  TopContainer,
  SIntroH1,
  SIntroH2,
  SPictureContainer,
  BotContainer,
  SArtContainer,
  BioContainer,
  SDescTitle,
  SDescText,
  SBioDiv,
  SkillsContainer,
  SkillsTable,
  SkillDivL,
  SkillDivR,
  TechTitle,
  STechBox,
  STechIcon,
  STechText,
  TechDiv,
  WorkContainer,
  ProjectDiv01,
  SH2,
  SH3,
  HContainer,
  SProjectImg01,
  SProjectImg02,
  MockContainer,
  SH1,
  SH4,
} from "./landingPage.style";
import PPicture from "../../Assets/Profile.jpg";
import LandingArt from "../../Assets/landingArt.png";
import iPhoneIMG from "../../Assets/iPhone.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LandingPage({ Backend, Frontend }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <SIntroContainer>
        <TopContainer>
          <SIntroH1>Full Stack Developer.</SIntroH1>
          <SIntroH2>I love reusable and simple code.</SIntroH2>
          <SPictureContainer src={PPicture} />
        </TopContainer>
        <BotContainer>
          <SArtContainer src={LandingArt} />
        </BotContainer>
      </SIntroContainer>
      <BioContainer>
        <SBioDiv>
          <SDescTitle>Hi, I'm Hugo. Nice to meet you.</SDescTitle>
          <SDescText>
            Full stack MERN Developer from Denver, Colorado. I have been very
            passionate about computers since I was 10 years old, exactly when I
            had to leave my parents without phone line, to go online and print
            texts on how HTML tags work and bash commands tutorials.
          </SDescText>
        </SBioDiv>
      </BioContainer>
      <SkillsContainer>
        <SkillsTable>
          <SkillDivL>
            <TechTitle>Back End</TechTitle>
            <TechDiv>
              {Backend.map((backEnd) => (
                <STechBox key={backEnd.key}>
                  <STechIcon src={backEnd.icon} />
                  <STechText>{backEnd.technology}</STechText>
                </STechBox>
              ))}
            </TechDiv>
          </SkillDivL>
          <SkillDivR>
            <TechTitle>Front End</TechTitle>
            <TechDiv>
              {Frontend.map((frontEnd) => (
                <STechBox key={frontEnd.key}>
                  <STechIcon src={frontEnd.icon} />
                  <STechText>{frontEnd.technology}</STechText>
                </STechBox>
              ))}
            </TechDiv>
          </SkillDivR>
        </SkillsTable>
      </SkillsContainer>
      <WorkContainer>
        <SH1>My Recent Work</SH1>
        <ProjectDiv01>
          <HContainer>
            <SH2>Dinner Picker</SH2>
            <SH3>Front End technologies used:</SH3>
            <SH4>React & styled-somponents.</SH4>
          </HContainer>
          <MockContainer>
            <a href="https://dinnerpicker.online/">
              <SProjectImg01 src={iPhoneIMG} data-aos="fade-left" />
            </a>
          </MockContainer>
          {/* <SProjectImg02 src={iPhoneIMG} /> */}
        </ProjectDiv01>
      </WorkContainer>
    </>
  );
}
