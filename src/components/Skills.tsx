'use client';

const skillsData = [
  {
    category: "AI/ML",
    items: [
      "Deep Learning",
      "Large Language Models (LLM)",
      "Agentic Systems & Orchestration",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Vector Databases (Weaviate)",
      "Knowledge Graphs (Neo4j)",
      "Model Evaluation & Benchmarking",
      "Computer Vision (Classification)",
    ],
  },
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Solidity"],
  },
   {
    category: "Tools & Frameworks",
    items: [
      "Next.js",
      "React",
      "FastAPI",
      "Flask",
      "Tailwind CSS",
      "LangChain/LangGraph (Implied)",
      "LangFuse",
      "Circom",
      "Git/GitHub",
      "Docker (Implied)",
    ],
  },
  {
    category: "Databases & Infrastructure",
    items: [
      "MongoDB",
      "Redis",
      "Neo4j",
      "AWS (SageMaker, Step Functions)",
      "CI/CD Pipelines",
      "Distributed Systems",
    ],
  },
  {
    category: "Blockchain Development",
    items: [
      "Zero-Knowledge Proofs (PLONK)",
      "Smart Contract Development (Solidity)",
      "On-chain Data Pipelines & Analytics",
      "DeFi Analysis",
      "Ethereum Blockchain Development",
      "Private Blockchain Networks",
    ],
  },
  {
    category: "Business & Operations",
    items: [
      "Operations Process Improvement",
      "IT Consulting",
      "Technology Solution Delivery",
      "Technical Writing & Documentation",
      "Project Management (PMO)",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-light-DEFAULT dark:bg-dark-DEFAULT">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Skills & <span className="text-brand-accent">Competencies</span>
        </h2>
        <div className="skills-grid gap-10"> {/* Applying direct class */}
          {skillsData.map((skillCategory) => (
            <div key={skillCategory.category} className="bg-light-DEFAULT dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-brand-accent">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((item) => (
                  <li key={item} className="text-light-text dark:text-gray-300 flex items-center">
                    {/* SVG removed due to persistent sizing issues */}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 