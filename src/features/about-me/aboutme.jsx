import ScrollIcon from "../../components/ui/Scrollicon/scroll";
import Titles from "../../components/ui/titles/titles";
import { ScrollReveal } from "../../components/ui/animation/scrollanimation";
import { TypingText } from "@/components/lightswind/typing-text";

export default function AboutMe() {
  return (
    <ScrollReveal.Container>
      <section>
        <div className="flex w-full justify-center items-center">
          <ScrollReveal>
            <Titles
              text={"OH, HEY I’M"}
              classNameText={"text-white font-shoulders text-[96px] font-black"}
            />
          </ScrollReveal>
          <ScrollReveal>
            <Titles
              text={"ANGEL"}
              classNameText={
                "text-transparent font-shoulders text-[96px] font-black ml-4"
              }
              style={{
                WebkitTextStroke: "2px #ffffff",
              }}
            />
          </ScrollReveal>
          <ScrollReveal>
            <Titles
              text={"!"}
              classNameText={"text-white font-shoulders text-[96px] font-black"}
            />
          </ScrollReveal>
        </div>
        <div className="flex items-center justify-center gap-10">
          <ScrollReveal animation="springRight">
            <div className="flex flex-col items-center gap-4">
              <ScrollIcon
                text={"SCROLL"}
                classNameText={"text-[#C25D64] text-[15px]"}
                classNameDiv={
                  "h-[450px] w-0.5 bg-linear-to-b from-[#C25D64] to-transparent rounded-full"
                }
              />
            </div>
          </ScrollReveal>
          <div className="mt-10">
            <ScrollReveal animation="clipReveal">
              <p className="text-white text-[32px] text-center font-medium font-serif">
                Hello again! I’m glad you want to learn more about me. I'm Angel
                Alexis Serrano Hernández, a Computer Engineer graduate from the
                University of Guadalajara and a Frontend Developer.
                <br />
                <br />
                I'm passionate about merging technology and design to build
                immersive, seamless, and fully accessible web experiences. Over
                the past year, I’ve honed my skills building dynamic interfaces
                with a modern tech stack that includes React, Astro, Tailwind
                CSS, GSAP, and Three.js, complemented by design and modeling
                tools like Figma and Blender.
                <br />
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="springRight">
            <div className="flex flex-col items-center gap-4">
              <ScrollIcon
                text={"SCROLL"}
                classNameText={"text-[#C25D64] text-[15px]"}
                classNameDiv={
                  "h-[450px] w-0.5 bg-linear-to-b from-[#C25D64] to-transparent rounded-full"
                }
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ScrollReveal.Container>
  );
}
