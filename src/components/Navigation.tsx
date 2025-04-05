"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Define section IDs for scroll spying
const SECTION_IDS = ['home', 'about', 'features', 'community', 'media', 'donate', 'play'];
// Define navigation items
const NAV_ITEMS = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' }, // Added 'About' link for completeness
  { href: '#features', label: '核心特色' },
  { href: '#community', label: '社区' },
  { href: '#media', label: '频道' },
  { href: '#donate', label: '支持'}, // Added 'Donate' link
  { href: '/patch-notes', label: '更新说明', isPageLink: true },
  { href: 'https://game.ra2web.com/', label: '点此开玩！', isExternal: true },
];
const STICKY_HEADER_HEIGHT = 68; // Approximate height of the sticky header in pixels

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null); // Ref to get header height if needed

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop - STICKY_HEADER_HEIGHT, // Offset for sticky header
          behavior: 'smooth'
        });
        // setActiveSection(targetId); // Set active immediately (optional, scroll handler will update too)
        setMobileMenuOpen(false); // Close mobile menu
      }
    } else {
      // For non-section links or external links
      setMobileMenuOpen(false); // Close mobile menu
    }
  };

  // Effect for scroll spying and sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Update sticky state
      setIsScrolled(scrollPosition > 10);

      // Determine active section
      let currentSection = '';
      let foundSection = false;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.offsetTop - STICKY_HEADER_HEIGHT - 50; // Adjust threshold
          // Check if the top of the section is above the middle of the screen
          if (scrollPosition >= elementTop) {
            currentSection = id;
            foundSection = true;
            break;
          }
        }
      }

       // If scrolled to top or no section found yet, default to home
      if (!foundSection && scrollPosition < windowHeight / 3) {
         currentSection = 'home';
      }


      setActiveSection(currentSection || 'home'); // Ensure it defaults to 'home' if empty
    };

    // Debounce scroll handler
    let timeoutId: NodeJS.Timeout | null = null;
    const debouncedScrollHandler = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50); // Adjust debounce delay if needed
    };

    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    handleScroll(); // Initial check

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  return (
    // Added sticky positioning and conditional shadow
    <header
      ref={headerRef}
      className={`w-full bg-gray-900 text-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
      style={{ height: `${STICKY_HEADER_HEIGHT}px` }} // Set explicit height
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo linked to #home with smooth scroll */}
        <a href="/#home" onClick={(e) => handleNavClick(e, '#home')} className="site-logo w-40 h-12 bg-contain bg-no-repeat bg-left shrink-0" style={{ backgroundImage: "url('/img/logo.png')" }} aria-label="返回首页">
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-2" aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Navigation Menu (Mobile and Desktop) */}
        {/* Adjusted mobile menu positioning and transition */}
        <nav className={`absolute md:relative top-full left-0 w-full md:top-0 md:w-auto bg-gray-900 md:bg-transparent z-40 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'} md:translate-y-0 md:shadow-none md:block`}>
           <ul className="flex flex-col md:flex-row md:items-center px-4 py-4 md:px-0 md:py-0 gap-y-2 md:gap-y-0">
            {NAV_ITEMS.map((item) => {
              // Determine if the link is active based on the section ID
              const sectionId = item.href.startsWith('#') ? item.href.substring(1) : null;
              const isActive = sectionId === activeSection;
              // Base classes + conditional active class
              const linkClasses = `py-2 md:py-1 px-3 block whitespace-nowrap transition-colors duration-200 rounded-md ${isActive ? 'text-white bg-red-600 font-semibold' : 'hover:text-white hover:bg-gray-700 font-medium'}`;
              const externalLinkClasses = "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 inline-block";

              if (item.isExternal) {
                return (
                  <li key={item.href} className="md:ml-3">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={externalLinkClasses}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              } else if (item.isPageLink) {
                return (
                  <li key={item.href} className="md:ml-3">
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={linkClasses} // Use standard link classes for page links too
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              } else {
                // Internal section link
                return (
                  <li key={item.href} className="md:ml-3">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={linkClasses} // Apply active styling
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
} 