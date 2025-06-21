import Nav from "./compoments/nav";
import Hero from "./compoments/hero";
import Offer from "./compoments/offer";
import Projekty from "./compoments/projects";
import Omnie from "./compoments/aboutme";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Offer />
      <Projekty />
      <Omnie />
    </main>
  );
}
