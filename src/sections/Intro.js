import React from "react";
import IntroSection from "../components/IntroSection";
import ContactIcon from "../components/ContactIcon";
import TypingEffect from "../components/TypingEffect";
import SkillsSummary from "../components/SkillsSummary";

import ContactData from "../data/ContactData.json";

function Intro() {
  return (
    <IntroSection id={"Intro"}>
      <div className="intro">
        <TypingEffect className="mb-2" tag="h1" typingSpeed={100}>
          Nwoke Precious
        </TypingEffect>

        <TypingEffect
          className="text-secondary intro-subtitle mt-0"
          tag="h2"
          typingSpeed={50}
        >
          Web Developer • UI/UX Designer • Graphic Designer
        </TypingEffect>

        <p className="subtitle text-secondary">
          I'm a passionate and creative Frontend Developer, UI/UX Designer &
          Graphic Designer with a strong eye for detail and a love for building
          user-friendly digital experiences. With expertise in React,
          JavaScript, Figma, etc I enjoy turning ideas into interactive and
          visually appealing solutions. I’m always eager to learn, grow, and
          take on exciting projects!
        </p>

        <p className="substitle text-secondary">
          With 2 years of experienced in software engineering, I bring a unique
          blend of technical and creative expertise to deliver high-quality,
          user-centered digital solutions.
        </p>

        <SkillsSummary />

        <div className="badge-container mt-4">
          <ContactIcon url={ContactData.LinkedIn.url} type={"LinkedIn"}>
            <i className={ContactData.LinkedIn.iconClassName}></i>
          </ContactIcon>

          <ContactIcon url={ContactData.GitHub.url} type={"GitHub"}>
            <i className={ContactData.GitHub.iconClassName}></i>
          </ContactIcon>

          <ContactIcon url={ContactData.Email.url} type={"Email"}>
            <i className={ContactData.Email.iconClassName}></i>
          </ContactIcon>
        </div>
      </div>
    </IntroSection>
  );
}

export default Intro;
