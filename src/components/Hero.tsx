'use client'; // If any interactivity is added later, otherwise can be server component

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-brand-accent font-mono text-lg md:text-xl mb-4">
          Sam.
        </h1>
        {/* Title: Applying direct class */}
        <h2 className="hero-title text-gray-100 dark:text-gray-100 mb-4">
          AI/ML & Cryptography Researcher.
        </h2>
        {/* Quote: Applying direct class */}
        <h3 className="hero-quote text-gray-300 dark:text-gray-400 mb-6">
          "There is no 'strong' cryptography—only algorithms that haven't yet met their adversary."
        </h3>
        <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 mb-4">
          I have experience building intelligent decentralized and autonomous systems, specifically LLM-based and agentic solutions. I enjoy creating things that make everyday tasks, actions and processes easier. I also share ideas about tech, music and life.
        </p>
        <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 mb-8">
          Currently an analyst within the Channel Clusters unit, supporting the Terminal Portfolio team at Safaricom. I was previously an AI Agentic engineer intern at Nethermind where I contributed to projects in the ZK engineering and PMO.
        </p>
        <div>
          {/* Optional: Add a CTA button here later, e.g., "View My Work" or "Get In Touch" */}
          {/* <a
            href="#projects"
            className="inline-block px-8 py-3 border border-brand-accent text-brand-accent rounded-md hover:bg-brand-accent hover:text-brand-primary transition-colors duration-300 text-lg"
          >
            View My Projects
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 