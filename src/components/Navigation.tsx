"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Define section IDs for scroll spying
const SECTION_IDS = ['home', 'about', 'features', 'community', 'media', 'donate', 'play'];
// Define navigation items (matching old site structure + added sections)
const NAV_ITEMS = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#features', label: '核心特色' },
  { href: '#community', label: '社区' },
  { href: '#media', label: '频道' },
  { href: '#donate', label: '支持'},
  { href: '/patch-notes', label: '更新说明', isPageLink: true },
  { href: 'https://game.ra2web.com/', label: '点此开玩！', isExternal: true },
];
// No offset needed if header isn't sticky
const SCROLL_OFFSET = 0;

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - SCROLL_OFFSET, // Adjust if needed for subtle spacing
          behavior: 'smooth'
        });
        // setActiveSection(targetId); // Optional: Set immediately, scroll listener will catch it too
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Consider a section active if its top edge passes slightly above the middle of the screen
      const threshold = viewportHeight * 0.4; // Adjust this value (0.4 means 40% from top)

      let currentSection = '';

      for (const id of SECTION_IDS) {
          const element = document.getElementById(id);
          if (element) {
              const elementTop = element.getBoundingClientRect().top + scrollPosition;
              const elementBottom = elementTop + element.offsetHeight;

              // Check if the element is significantly present around the threshold point
              if (scrollPosition >= elementTop - threshold && scrollPosition < elementBottom - threshold) {
                  currentSection = id;
                  break; // Prioritize the highest section meeting the criteria
              }
              // Fallback for sections near the top when scrolling up quickly
               else if (scrollPosition < elementTop && scrollPosition > elementTop - viewportHeight * 0.8 && currentSection === '') {
                   // If we are above the current section but still within a reasonable range, keep it active
                   // This helps prevent flickering when scrolling up past a section boundary
                   // This part might need refinement based on observed behavior
               }
          }
      }

       // If near the top or no section met criteria, default to 'home'
      if (scrollPosition < viewportHeight * 0.5 && currentSection === '') {
          currentSection = 'home';
      }


      setActiveSection(currentSection || SECTION_IDS[0]); // Default to first section ID
    };

    let timeoutId: NodeJS.Timeout | null = null;
    const debouncedScrollHandler = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    handleScroll(); // Initial check

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  return (
    <header className="w-full bg-gray-900 text-white z-50 relative"> {/* Ensure header has context for absolute menu */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center min-h-[60px]">
        {/* Logo linked to #home with smooth scroll */}
        <a href="/#home" onClick={(e) => handleNavClick(e, '#home')} className="site-logo w-40 h-12 bg-contain bg-no-repeat bg-left shrink-0" style={{ backgroundImage: "url('/img/logo.png')" }} aria-label="返回首页">
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-2" aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {/* SVG Icons */}
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Navigation Menu (Mobile and Desktop) */}
        {/* Mobile menu slides down from the header */}
        <nav className={`absolute md:relative top-full left-0 w-full md:top-0 md:w-auto bg-gray-900 md:bg-transparent z-40 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'} md:translate-y-0 md:shadow-none md:block`}>
           <ul className="flex flex-col md:flex-row md:items-center px-4 py-4 md:px-0 md:py-0 gap-y-1 md:gap-y-0 md:gap-x-1 lg:gap-x-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.startsWith('#') ? item.href.substring(1) : null;
              const isActive = sectionId === activeSection;

              // Base classes including pseudo-element setup
              const baseLinkClasses = `relative py-2 md:py-3 px-4 block whitespace-nowrap font-medium transition-colors duration-200 
                                       after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-600 after:w-0 
                                       after:transition-all after:duration-300 after:ease-in-out after:content-['']`;

              // Conditional classes for active/inactive/hover state
              const stateClasses = isActive
                ? 'text-white after:w-full' // Active: white text, full underline
                : 'text-gray-300 hover:text-white hover:after:w-full'; // Inactive: gray text, hover to white text + full underline

              // Specific style for the external button
              const externalLinkClasses = "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 inline-block text-sm";

              if (item.isExternal) {
                return (
                  <li key={item.href} className="md:ml-3">
                    <a
                      href={item.href} target="_blank" rel="nofollow noopener noreferrer"
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={externalLinkClasses}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              } else if (item.isPageLink) {
                return (
                  <li key={item.href} className="md:ml-2">
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={`${baseLinkClasses} ${stateClasses}`} // Apply combined classes
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              } else {
                // Internal section link
                return (
                  <li key={item.href} className="md:ml-2">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`${baseLinkClasses} ${stateClasses}`} // Apply combined classes
                      aria-current={isActive ? 'page' : undefined}
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