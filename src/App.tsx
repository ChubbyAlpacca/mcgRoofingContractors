import "./App.css";
import { Navbar } from "./components/NavBar";
import { About } from "./components/About";
import { Intro } from "./components/Intro";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <ImageCarousel />
      <About />
      <Testimonials />
      <ContactMe />
      {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfuC4Zq0EcUfTc8lUfjJXCa-zBn0IR10sa2BhUhCh1kih2puQ/viewform?embedded=true"
        width="640"
        height="1011"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe> */}
      <Footer />
    </>
  );
}

export default App;
