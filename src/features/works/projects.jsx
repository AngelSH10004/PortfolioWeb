import TitleText from "./components/title";
import WorksList from "./components/WorksList";
import Skills from "./components/skills";

export default function Projects() {
  return (
    <>
      {/*Section Works*/}
      <section>
        {/*Style Title*/}
        <TitleText />
        {/*Style of Projects*/}
        <WorksList />
        {/*style Skills*/}
        <Skills />
      </section>
    </>
  );
}
