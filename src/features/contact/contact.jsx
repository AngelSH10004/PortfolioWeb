export default function Contact() {
  return (
    <section className="flex items-center min-h-[400px] md:h-200 overflow-hidden w-full">
      <div className="flex flex-col justify-center relative w-full">
        <div className="absolute z-0 text-7xl sm:text-9xl md:text-[200px] lg:text-[300px] font-shoulders font-black bg-linear-to-r from-[#2b080a70] to-[#531c2090] bg-clip-text text-transparent leading-none select-none">
          <p>CONTACT</p>
          <p>ME</p>
        </div>
        <p className="z-10 text-white text-3xl sm:text-5xl md:text-7xl lg:text-[96px] text-left font-black font-serif leading-tight md:leading-30">
          Wow, you made it to the end! Are you interested in a project?
        </p>
      </div>
    </section>
  );
}
