import TextScrollMarquee from "@/components/lightswind/text-scroll-marquee";

export default function Skills() {
  return (
    <div className="relative mt-10 md:mt-20 py-10 md:py-20 flex justify-center items-center overflow-hidden w-full">
      <p className="absolute z-0 font-shoulders text-[180px] sm:text-[320px] md:text-[450px] lg:text-[550px] font-black bg-linear-to-r from-[#3d101375] to-[#6a292c82] bg-clip-text text-transparent select-none">
        SKILLS
      </p>
      <TextScrollMarquee
        baseVelocity={1}
        direction="left"
        className="text-8xl sm:text-[200px] md:text-[300px] lg:text-[400px] font-bold font-shoulders text-[#ffffff] uppercase z-10"
        scrollDependent={false}
        delay={500}
      >
        FIGMA, REACT, ASTRO, NODEJS, TAILWIND, TYPESCRIPT, PYTHON, THREEJS,
        GSAP, BLENDER.
      </TextScrollMarquee>
    </div>
  );
}
