'use client';
import Link from 'next/link';

// Icon components removed due to persistent sizing issues
const contactLinks = [
  {
    name: "Email",
    label: "samiree.blockchain@gmail.com",
    href: "mailto:samiree.blockchain@gmail.com",
    icon: null, // Icon removed
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/sam-ire",
    href: "https://linkedin.com/in/sam-ire",
    icon: null, // Icon removed
  },
  {
    name: "Discord",
    label: "@zero_figures.",
    // Discord links are tricky; usually it's an invite or a profile ID not directly linkable to open app
    // For now, a placeholder or a link to a server if available.
    href: "#", // Placeholder as direct profile links are not standard
    icon: null, // Icon removed
  },
  {
    name: "GitHub",
    label: "github.com/con-fucius",
    href: "https://github.com/con-fucius",
    icon: null, // Icon removed
  },
  {
    name: "X (Twitter)",
    label: "x.com/genghis_khxnt",
    href: "https://x.com/genghis_khxnt",
    icon: null, // Icon removed
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-light-DEFAULT dark:bg-dark-DEFAULT">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-text dark:text-dark-text">
          Let's <span className="text-brand-accent">Connect</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          If you're building in/excited about AI or wanna chat, let's connect.
        </p>
        <div className="space-y-6">
          {contactLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group flex items-center justify-center p-4 rounded-lg bg-light-DEFAULT dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-accent"
            >
              {/* Icon display removed */}
              {/* <div className="mr-4 text-brand-accent group-hover:scale-110 transition-transform">
                {item.icon}
              </div> */}
              <div>
                <span className="block text-lg font-semibold text-light-text dark:text-dark-text group-hover:text-brand-accent">
                  {item.name}
                </span>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 