import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import BrainDump from "@/components/BrainDump";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <BrainDump />
      <Contact />
      {/* Other sections will be added below */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-brand-accent">
          Welcome to the Portfolio
        </h1>
        <p className="mt-4 text-lg">
          Content will be added here progressively.
        </p>
      </div> */}
    </>
  );
}
