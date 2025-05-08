import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Placeholder social links - to be updated from actual-content.md
  const socials = [
    { name: 'LinkedIn', href: '#', icon: 'LI' }, // Placeholder icon
    { name: 'GitHub', href: '#', icon: 'GH' },   // Placeholder icon
    { name: 'Email', href: '#', icon: 'EM' },    // Placeholder icon
    { name: 'Discord', href: '#', icon: 'DI' },  // Placeholder icon
    { name: 'Twitter', href: '#', icon: 'TW' },  // Placeholder icon
  ];

  return (
    <footer className="py-8 text-light-text dark:text-gray-400" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      {/* TODO: Apply dark mode background via CSS variable or different approach if needed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socials.map((social) => (
            <Link key={social.name} href={social.href} className="hover:text-brand-accent" target="_blank" rel="noopener noreferrer">
              {/* Placeholder for actual SVG icon */}
              <span className="sr-only">{social.name}</span>
              <div className="w-6 h-6 border rounded-full flex items-center justify-center border-gray-500 dark:border-gray-500 hover:border-brand-accent">
                {social.icon} 
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Sam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 