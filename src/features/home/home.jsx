import ScrollIcon from "../../components/ui/Scrollicon/scroll";

function Home() {
  return (
    <section className="px-10">
      <div className="flex flex-col justify-center items-center text-[200px] font-shoulders font-black mx-20 my-10 leading-none">
        <div className=" mr-auto text-[#52272A] transition-transform duration-500 ease-out hover:scale-110">
          FRONT-END
        </div>
        <div
          className="ml-auto -mt-20 text-transparent transition-transform duration-500 ease-out hover:scale-110"
          style={{ WebkitTextStroke: "4px #7F3D42" }}
        >
          DEVELOPER
        </div>
      </div>
      <div className="flex">
        <div className="text-[48px] text-left leading-tight w-1/2 italic font-serif font-semibold text-[#6E473D]">
          "Hi! I’m a Computer Engineering student focused on Frontend Web and
          Software Development."
        </div>
        <div className="flex flex-col items-center w-1/2 gap-4">
          <ScrollIcon
            text={"SCROLL"}
            classNameText={"text-[#515151] text-[15px]"}
            classNameDiv={
              "h-40 w-0.5 bg-linear-to-b from-[#332313] to-[#f4d4a82e]"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
