'use client';

import Link from 'next/link';

const experienceData = [
  {
    role: "AI Agentic Engineer Intern",
    company: "Nethermind",
    logo: null, // Placeholder for actual SVG or component
    dates: "Jan 2025 – Apr 2025",
    location: "London, UK",
    achievements: [
      "Engineered autonomous agents with LLM-driven reasoning cycles, modular toolchains, and orchestration ADKs.",
      "Collaborated ZK engineering research teams to prototype agent orchestration strategies across distributed environments.",
      "Developed prompt strategies, embedded toolchains, and vector-assisted retrieval to augment agent capabilities.",
      "Built evaluation pipelines to benchmark agent performance, cost efficiency, and alignment with user intent.",
      "Enhanced local agent infrastructure by testing emergent libraries, optimizing toolchains, and deploying modular agent nodes.",
      "Reviewed academic literature and emerging frameworks to identify scalable engineering solutions for agent orchestration.",
    ],
  },
  {
    role: "Blockchain Data Analyst",
    company: "Securities.io",
    logo: null,
    dates: "Jun 2022 – Sep 2023",
    location: "San Francisco, CA",
    achievements: [
      "Implemented onchain data pipelines and extraction utilities for DeFi analytics, built dashboards to visualize protocol metrics.",
      "Led quantitative research on Layer 1/2 networks, synthesizing reports on gas economics, consensus, and crosschain activity.",
      "Authored technical publications on zk-proof systems, tokenomics, smart contract security, DeFi exploits and compliance.",
      "Delivered metric-based narratives and external-facing communication highlighting protocol and ecosystem milestones.",
      "Maintained contributor relationships and aligned reporting cadence with evolving strategic objectives.",
    ],
  },
  {
    role: "Cloud/Machine Learning Trainee",
    company: "Azubi Africa",
    logo: null,
    dates: "Jan 2022 – Apr 2022",
    location: "Nairobi, KE",
    achievements: [
      "Designed and provisioned cloud-native analytics pipelines and app stacks using AWS architecture best practices.",
      "Deployed models for image classification and computer vision applications, optimizing for accuracy and latency.",
      "Automated ML workflows from data ingestion to model serving using SageMaker, Step Functions, and CI/CD pipelines.",
      "Refined model performance through hyperparameter tuning, inference optimization, and model quantization.",
      "Implemented model-agnostic data pipelines using AWS microservices for low-latency, real-time inference.",
    ],
  },
  {
    role: "IoT Systems Engineer Attachee",
    company: "Gearbox",
    logo: null,
    dates: "Feb 2021 – May 2021",
    location: "Nairobi, KE",
    achievements: [
      "Prototyped motion-sensing IoT systems using Raspberry Pi/Arduino; integrated alert logic and edge processing.",
      "Validated sensor network designs via circuit simulation and proof-of-concept field testing.",
      "Configured Linux-based IoT gateways to bridge PLCs with telemetry and monitoring pipelines.",
      "Collaborated with mechatronics engineers in PCB design reviews and firmware development for application-specific ICs.",
      "Documented implementation progress and design trade-offs to streamline team alignment and internal information sharing.",
    ],
  },
  {
    role: "IT Support Attachee",
    company: "Ministry of Information, Communications and Digital Economy",
    logo: null,
    dates: "Jul 2019 – Oct 2019",
    location: "Nairobi, KE",
    achievements: [
      "Automated system patching workflows using WSUS and MECM (formerly SCCM).",
      "Diagnosed network disruptions (DNS, SMTP) via Wireshark captures and traceroute-based packet path analysis.",
      "Deployed Cisco and Juniper network infrastructure; configured firewall rules, VLANs, and switch logic.",
      "Resolved application faults through log tracing and dynamic hotfix deployment strategies.",
    ],
  },
];

// CompanyIcon component removed due to persistent sizing issues
const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-light-DEFAULT dark:bg-dark-DEFAULT">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-text dark:text-dark-text">
          Professional <span className="text-brand-accent">Experience</span>
        </h2>
        <p className="text-center text-light-text dark:text-gray-400 mb-12">
          Here is a timeline of my professional experiences. Feel free to download my resume for more details.
        </p>
        <div className="text-center mb-12">
          <Link
            href="/resume.pdf" // Path to the resume in the public folder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-brand-accent text-brand-accent rounded-md hover:bg-brand-accent hover:text-brand-primary transition-colors duration-300 text-lg"
          >
            Download Resume (PDF)
          </Link>
        </div>

        <div className="relative">
          {/* Vertical line for the timeline */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {experienceData.map((exp, index) => (
            <div key={index} className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start`}>
              {/* Timeline Dot and Logo Area */}
              <div className="md:w-1/2 flex md:justify-center mb-6 md:mb-0">
                <div className={`relative md:w-auto ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-accent rounded-full ${index % 2 === 0 ? 'left-[-2.3rem]': 'right-[-2.3rem]' }"></div>
                    <div className="p-2 bg-light-DEFAULT dark:bg-gray-800 rounded-full inline-block shadow-md">
                        {/* SVG removed due to persistent sizing issues */}
                        {/* {exp.logo ? <img src={exp.logo} alt={`${exp.company} logo`} className="w-10 h-10" /> : <CompanyIcon />} */}
                        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">Logo</div> {/* Placeholder div */}
                    </div>
                </div>
              </div>

              {/* Experience Card Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8' }`}>
                <div className="bg-light-DEFAULT dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-brand-accent mb-1">{exp.role}</h3>
                  <p className="text-md font-semibold text-light-text dark:text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.dates}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.location}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-light-text dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 