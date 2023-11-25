import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Meta title="Mine Games, Paradise World" />

      <Header />
      <Hero />
      <Navbar />
      <Footer />
    </div>
  );
}
