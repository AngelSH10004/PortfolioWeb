import { ScrollReveal } from "../../../components/ui/animation/scrollanimation";
import Titles from "../../../components/ui/titles/titles";

export default function TitleText() {
  return (
    <ScrollReveal.Container>
      <div className="mt-20 md:mt-40 flex justify-center items-center text-7xl sm:text-7xl md:text-[140px] lg:text-[200px] tracking-wider md:tracking-[28%]">
        <ScrollReveal>
          <Titles
            text={"PRO"}
            classNameText={"text-white font-shoulders font-black"}
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="relative flex items-center">
            <svg
              viewBox="0 0 834 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 z-0 w-full h-full"
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
                "text-transparent font-shoulders font-black z-10 px-4 sm:px-6 md:px-8 stroke-projects"
              }
            />
          </div>
        </ScrollReveal>
      </div>
    </ScrollReveal.Container>
  );
}
