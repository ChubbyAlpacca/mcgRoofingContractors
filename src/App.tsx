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
      <Footer />
    </>
  );
}

export default App;
