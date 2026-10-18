import React from "react";
import AnimationText from "../ui/text/animationtext";

export default function Footer() {
  return (
    <footer className="bg-[#4A1F24] pt-5 px-10 flex items-center">
      <div className="flex flex-col w-full">
        <div className=" bg-[#ffffff76] h-px rounded-full"></div>
        <div className="flex w-full justify-between px-10 py-5 font-serif text-[#E6BFBF] text-[24px] font-black">
          <AnimationText text="LINKEDIN" color="#E1D8D1" />
          <AnimationText text="EMAIL" color="#E1D8D1" />
          <AnimationText text="GITHUB" color="#E1D8D1" />
          <AnimationText text="CV" color="#E1D8D1" />
        </div>
      </div>
    </footer>
  );
}
