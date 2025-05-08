import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-md bg-light-DEFAULT text-light-text dark:bg-dark-DEFAULT dark:text-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-accent">
              Sam
            </Link>
          </div>
          <div className="desktop-nav-links hidden md:flex items-center"> {/* Added class for direct styling */}
            <Link href="/#skills" className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Skills</Link>
            <Link href="/#experience" className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Experience</Link>
            <Link href="/#projects" className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
            <Link href="/#research" className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Research</Link>
            <Link href="/#braindump" className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Brain Dump</Link>
            <Link href="/#contact" className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <ThemeSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button className="ml-4 hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent"> {/* Increased margin */}
              {/* SVG removed due to persistent sizing issues */}
              <span className="text-sm font-medium">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 