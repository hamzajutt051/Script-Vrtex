import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Sociallinks from "../components/Sociallinks";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Experiance from "../components/Experiance";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />
      <Sociallinks />
      <Footer />
    </div>
  );
}
