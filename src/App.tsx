import "./App.css";
import { Navbar } from "./components/NavBar";
import { About } from "./components/About";
import { Intro } from "./components/Intro";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
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
    </>
  );
}

export default App;
