import AboutMe from "../features/about-me/aboutme";
import Projects from "../features/works/projects";
import Contact from "../features/contact/contact";
import StyleVectorial from "../components/ui/background/style_vectorial";

export default function Content() {
  return (
    <>
      <article className="relative bg-[#4A1F24] pt-30 px-10 mt-40 overflow-hidden">
        <StyleVectorial />
        <div className="relative z-10">
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </article>
    </>
  );
}
