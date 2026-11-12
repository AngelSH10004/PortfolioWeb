import React from "react";
import AnimationText from "../ui/text/animationtext";
import cv from "../../assets/CV-angel-serrano.pdf";
export default function Footer() {
  return (
    <footer className="bg-[#4A1F24] pt-5 px-4 sm:px-8 md:px-10 flex items-center w-full overflow-hidden">
      <div className="flex flex-col w-full">
        <div className="bg-[#ffffff76] h-px rounded-full"></div>
        <div className="flex flex-wrap sm:flex-nowrap w-full justify-around sm:justify-between px-2 sm:px-6 md:px-10 py-5 font-serif text-[#E6BFBF] text-sm sm:text-lg md:text-xl lg:text-[24px] font-black gap-2 sm:gap-4">
          <AnimationText
            text="LINKEDIN"
            color="#E1D8D1"
            link="https://www.linkedin.com/in/angel-alexis-serrano-hernandez-274a2829b"
          />
          <AnimationText
            text="EMAIL"
            color="#E1D8D1"
            link="mailto:angelseha004@gmail.com"
          />
          <AnimationText
            text="GITHUB"
            color="#E1D8D1"
            link={"https://github.com/AngelSH10004"}
          />
          <AnimationText text="CV" color="#E1D8D1" link={cv} />
        </div>
      </div>
    </footer>
  );
}
