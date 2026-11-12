/* React imports */
import { motion } from "motion/react";
import { useEffect, useState } from "react";

/* Component imports */
import FlipLink from "../../../components/ui/animation/FlipText";
import BorderAnimation from "../../../components/ui/animation/borderAnimation";
import { ScrollReveal } from "../../../components/ui/animation/scrollanimation";
import CursorImage from "../../../components/ui/hover/CursorImage";
import ContentProyect from "../components/layout/contentProyect";

/* Image imports */
import family from "../../../assets/images/family.webp";
import lion from "../../../assets/images/lion.webp";
import posgrado from "../../../assets/images/posgrado.webp";
import error404 from "../../../assets/svg/404error.svg";

/* Images imports */
import { ContentRegio, Posgrado, Informe } from "../assets/img";

const works = [
  {
    title: "REGIONIKA",
    image: family,
    link: "",
    description:
      "A fast and accessible digital platform designed to connect academic research with the Los Altos de Jalisco community. I modernized the university platform with Astro, building a responsive, user-centered interface focused on faster loading times and performance.",
    mainImage: ContentRegio,
    footerText: "REGIONIKA - SOCIAL SERVICE",
    footerLink: "https://clinictrack-cualtos.udg.mx/",
  },
  {
    title: "REPORT",
    image: lion,
    link: "",
    description:
      "Developed the official web platform for the Rector's Annual Activities Report at CUAltos, creating a modern digital experience for presenting the university's annual results. I integrated React and Three.js for interactive 3D elements and advanced UI components, with a high-performance interface focused on seamless user engagement.",
    mainImage: Informe,
    footerText: "REPORT - SOCIAL SERVICE",
    footerLink: "",
  },
  {
    title: "POSTGRADUATE",
    image: posgrado,
    link: "",
    description:
      "Collaborated in a 15-person team to develop and implement a web platform to digitize and centralize postgraduate program management at CUAltos. I built the frontend with React and Tailwind CSS and worked on the backend with Node.js, Python and MongoDB, replacing manual processes with an accessible, intuitive interface.",
    mainImage: Posgrado,
    footerText: "POSTGRADUATE STUDIES SYSTEM",
    footerLink: "",
  },
  {
    title: "STUDIUM",
    image: error404,
    link: "",
    description:
      "Currently building Studium, an adaptive learning and academic resource-sharing platform tailored for university communities. I'm developing it with a decoupled SPA frontend, a RESTful modular backend, and cloud infrastructure on AWS to master full-stack system design, database modeling, and fast search optimization.",
    mainImage: error404,
    footerText: "STUDIUM - PAGEWORK (Upcoming Project)",
    footerLink: "",
  },
];

// Preload all work images
function usePreloadImages(images) {
  useEffect(() => {
    images.forEach((src) => {
      if (!src) return;
      const img = new Image();
      img.src = src;
    });
  }, []);
}

export default function WorksList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(0);
  usePreloadImages([
    ...works.map((w) => w.image),
    ...works.map((w) => w.mainImage),
  ]);

  return (
    <>
      <ScrollReveal.Container>
        <ScrollReveal>
          <div className="mt-20 md:mt-40 h-auto border-y-2 border-[#fffdfd00] leading-none py-6 md:py-10">
            {works.map(({ title, image }, index) => (
              <CursorImage src={image} key={index}>
                <motion.div
                  key={index}
                  initial="initial"
                  whileHover="hovered"
                  className="group flex flex-col justify-between items-center p-4 sm:p-8 md:p-10 cursor-pointer gap-5"
                  onClick={() => {
                    setIsOpen(true);
                    setSelectProject(index);
                  }}
                >
                  <div className="flex justify-between items-center w-full gap-4">
                    <h2 className="text-white! text-5xl sm:text-7xl md:text-9xl lg:text-[160px] xl:text-[200px] font-shoulders font-black break-words">
                      <FlipLink>{title}</FlipLink>
                    </h2>
                    <div className="p-2 sm:p-4 rounded-full text-white group-hover:bg-[#ffffff] group-hover:text-[#000000] group-hover:cursor-pointer shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="icon flat-line w-8 h-8 sm:w-12 sm:h-12 md:w-[70px] md:h-[70px]"
                      >
                        <line x1="5" y1="19" x2="19" y2="5" />
                        <polyline points="19 9 19 5 15 5" />
                      </svg>
                    </div>
                  </div>
                  <BorderAnimation />
                </motion.div>
              </CursorImage>
            ))}
          </div>
        </ScrollReveal>
      </ScrollReveal.Container>

      <ContentProyect
        OpenPage={isOpen}
        ClosePage={() => setIsOpen(false)}
        title={works[selectProject].title}
        description={works[selectProject].description}
        mainImage={works[selectProject].mainImage}
        secundaryImage={works[selectProject].secundaryImage}
        footerText={works[selectProject].footerText}
        footerLink={works[selectProject].footerLink}
      />
    </>
  );
}
