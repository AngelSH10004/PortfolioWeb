import Titles from "../../components/ui/titles/titles";
import { LoopingWords } from "@/components/lightswind/looping-words";
import TextScrollMarquee from "@/components/lightswind/text-scroll-marquee";
import { ScrollReveal } from "../../components/ui/animation/scrollanimation";

export default function Projects() {
  return (
    <>
      {/*Section Works*/}
      <section>
        {/*Style Title*/}
        <ScrollReveal.Container>
          <div className="mt-40 flex justify-center items-center  text-[200px] tracking-[28%]">
            <ScrollReveal>
              <Titles
                text={"PRO"}
                classNameText={"text-white font-shoulders font-black"}
              />
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative flex">
                <svg
                  viewBox="0 0 834 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute z-0 full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M46 350C20.5949 350 0 329.405 0 304V46C0 20.5949 20.5949 0 46 0H710.326C722.515 0 734.206 4.83805 742.831 13.4516L820.505 91.0232C829.145 99.6516 834 111.361 834 123.572V304C834 329.405 813.405 350 788 350H46Z"
                    fill="#52272A"
                  />
                </svg>
                <Titles
                  text={"JECTS"}
                  classNameText={
                    "text-transparent font-shoulders font-black z-10 pl-4"
                  }
                  style={{
                    WebkitTextStroke: "5px #ffffff",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal.Container>
        {/*Style of Projects*/}
        <ScrollReveal.Container>
          <ScrollReveal>
            <div className="mt-25 grid grid-cols-4 grid-rows-2 gap-5 h-200">
              <div className="col-span-4 row-span-1 bg-red-50 rounded-[40px]">
                1
              </div>
              <div className="col-span-2 row-span-1 row-start-2  bg-red-50 rounded-[40px]">
                2
              </div>
              <div className="col-span-2 row-span-1 col-start-3 row-start-2  bg-red-50 rounded-[40px]">
                3
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal.Container>
        <div className="relative mt-20 py-20 flex justify-center items-center  ">
          <p className="absolute z-0 font-shoulders text-[550px] font-black bg-linear-to-r from-[#3d101375] to-[#6a292c82] bg-clip-text text-transparent">
            SKILLS
          </p>
          <TextScrollMarquee
            baseVelocity={1}
            direction="left"
            className="text-[400px] font-bold font-shoulders text-[#ffffff]  uppercase z-10"
            scrollDependent={false}
            delay={500}
          >
            FIGMA, REACT, ASTRO, NODEJS, TAILWIND, TYPESCRIPT, PYTHON, THREEJS,
            GSAP, BLENDER.
          </TextScrollMarquee>
        </div>
      </section>
    </>
  );
}
