import Hero from '../components/Hero';
import About from '../components/About';
import Experiments from '../components/Experiments';
import SideExperiments from '../components/SideExperiments';
import Contact from '../components/Contact';
import SectionDivider from '../components/SectionDivider';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experiments />
      <SectionDivider />
      <SideExperiments />
      <SectionDivider />
      <Contact />
    </main>
  );
}
