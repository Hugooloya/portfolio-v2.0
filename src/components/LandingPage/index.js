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
} from "./landingPage.style";
import PPicture from "../../Assets/Profile.jpg";
import LandingArt from "../../Assets/landingArt.png";

export default function LandingPage({ techs }) {
  console.log(techs[0].icon);
  return (
    <>
      <SIntroContainer>
        <TopContainer>
          <SIntroH1>Full Stack Developer</SIntroH1>
          <SIntroH2>I love reusable and simple code</SIntroH2>
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
            {techs.map((tech) => (
              <STechBox key={tech.key}>
                <STechIcon src={tech.icon} />
                <STechText>{tech.technology}</STechText>
              </STechBox>
            ))}
          </SkillDivL>
          <SkillDivR>
            <TechTitle>Front End</TechTitle>
          </SkillDivR>
        </SkillsTable>
      </SkillsContainer>
    </>
  );
}
