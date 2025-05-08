'use client';
import Link from 'next/link';

const projectsData = [
  {
    title: "Q&A Retrieval Augmented Generation",
    description: "Quetzal is a sophisticated RAG system designed to facilitate intelligent information retrieval and question answering. By integrating web crawling, document processing, vector storage, and generative AI, the system provides accurate, source-attributed answers to complex research queries. The project leverages Google's Gemini models for language understanding and generation, Weaviate vector database for semantic search capabilities, and a Flask-based web interface for user interaction. The architecture follows modular design principles, allowing for scalability, maintainability, and extensibility.",
    techStack: ["RAG", "Gemini", "Weaviate", "Flask", "Python"],
    githubLink: null, // Placeholder
    liveLink: null, // Placeholder
  },
  {
    title: "AI Agentic Workflow Automation Suite",
    description: "AI agent management platform leveraging Next.js, TypeScript, and FastAPI. The platform orchestrates autonomous AI agents with workflow automation capabilities, integrating with Google Workspace, Slack, Notion, Telegram, GitHub, and LangFuse for observability. Features a distributed task processing architecture using Redis and MongoDB, with authentication via Okta.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "Redis", "Okta", "LangFuse"],
    githubLink: null, // Assumed from description, but no explicit link given
    liveLink: null,
  },
  {
    title: "Scalable Knowledge Graph for Scientific Publications",
    description: "A high-performance multi-million-node Neo4j knowledge graph infrastructure, synthesizing academic metadata including cross-institutional author affiliations, multi-domain citation networks, and publication hierarchies. The graph powers semantic search systems through its dynamic relationship mapping capabilities. It combines GPT models with vector-indexed graph traversals in a RAG pipeline to power context-aware paper recommendations.",
    techStack: ["Neo4j", "Knowledge Graph", "GPT", "RAG", "Python"],
    githubLink: null,
    liveLink: null,
  },
  {
    title: "Zero-Knowledge ASP System",
    description: "A zero-knowledge attestation service provider PoC system enabling private and compliant blockchain transactions. Combines optimized Circom circuits using PLONK proving schemes with a multi-chain compatible architecture to verify Merkle tree-based membership claims. Python-based attestation service aggregates decentralized oracle data and constructs Merkle tree structures, generating cryptographic proofs that are verified on-chain through a Solidity verifier contract.",
    techStack: ["Zero-Knowledge", "Circom", "PLONK", "Solidity", "Blockchain", "Python"],
    githubLink: null,
    liveLink: null,
  },
];

// Icon components removed due to persistent sizing issues
const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      {/* TODO: Apply dark mode background via CSS variable or different approach if needed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Featured <span className="text-brand-accent">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700" style={{ backgroundColor: 'var(--color-bg-light)' }}>
              {/* TODO: Apply dark mode background via CSS variable or different approach if needed */}
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <Link href={project.liveLink || "#"} target={project.liveLink ? "_blank" : "_self"} rel="noopener noreferrer">
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text hover:text-brand-accent transition-colors">
                            {project.title}
                        </h3>
                    </Link>
                    <div className="flex space-x-3">
                        {/* Icons removed due to persistent sizing issues */}
                        {project.githubLink && (
                            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-xs">
                                [GitHub]
                            </Link>
                        )}
                        {project.liveLink && (
                             <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-xs ml-2">
                                [Live]
                            </Link>
                        )}
                    </div>
                </div> 
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-24 overflow-y-auto">
                  {project.description}
                </p>
                <div className="mt-auto pt-4">
                  <h4 className="text-sm font-semibold text-light-text dark:text-gray-200 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-brand-accent bg-opacity-20 text-brand-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 