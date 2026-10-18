import Nav from "../components/layout/header/nav";
import Home from "../features/home/home";
import Preloader from "../components/layout/loader/preloader";
import Content from "./content";
import Footer from "../components/layout/footer";

function Main() {
  return (
    <>
      <Preloader />
      <Nav />
      <Home />
      <Content />
      <Footer />
    </>
  );
}

export default Main;
