import AboutMe from "../features/about-me/aboutme";
import Projects from "../features/works/projects";
import Contact from "../features/contact/contact";

export default function Content() {
  return (
    <article className="relative pt-20 md:pt-30 px-4 sm:px-8 md:px-10 mt-10 md:mt-20 overflow-hidden w-full">
      <div className="relative z-10 w-full">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </article>
  );
}
