"use client";

import SkillBar from "./SkillBar";
import LogoCard from "./LogoCard";
import Html5svg from "@/assets/html5.svg";
import CSSsvg from "@/assets/css3.svg";
import JSsvg from "@/assets/javascript.svg";
import Reduxsvg from "@/assets/redux.svg";
import Reactsvg from "@/assets/react.svg";
import TSsvg from "@/assets/typescript.svg";

export default function SkillSection() {
  return (
    <section className="relative container overflow-hidden z-40">
      <div className="max-w-290 mx-auto px-6">
        <div className="w-full mx-auto items-center text-center my-10 flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold">My Core Skill</h1>
          <p className="text-neutral-200 text-md">
            An overview of the key technologies and frameworks I specialize in
          </p>
        </div>

        <div className="w-full mx-auto flex flex-col lg:flex-row">
          <div className="w-full grid grid-cols-3 items-start justify-between">
            <LogoCard src={Html5svg} />
            <LogoCard src={CSSsvg} />
            <LogoCard src={JSsvg} />
            <LogoCard src={Reduxsvg} />
            <LogoCard src={Reactsvg} />
            <LogoCard src={TSsvg} />
          </div>
          <div className="w-full">
            <SkillBar name="HTML" percentage={100} />
            <SkillBar name="Redux" percentage={85} />
            <SkillBar name="Javascript" percentage={90} />
            <SkillBar name="React" percentage={90} />
            <SkillBar name="CSS" percentage={80} />
            <SkillBar name="Typescript" percentage={70} />
          </div>
        </div>
      </div>
    </section>
  );
}
