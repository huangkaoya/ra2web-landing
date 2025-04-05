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
const HEADER_HEIGHT_APPROX = 60; // Approximate height for scroll calculations if needed, less critical now

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // isScrolled state is no longer needed for non-sticky header
  // const [isScrolled, setIsScrolled] = useState(false);

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
          top: offsetTop - HEADER_HEIGHT_APPROX, // Small offset might still be needed depending on layout
          behavior: 'smooth'
        });
        setMobileMenuOpen(false); // Close mobile menu
      }
    } else {
      // For non-section links or external links
      setMobileMenuOpen(false); // Close mobile menu
    }
  };

  // Effect for scroll spying
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine active section (adjust threshold slightly if needed without sticky header)
      let currentSection = '';
      let foundSection = false;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const element = document.getElementById(id);
        if (element) {
          // Adjust threshold - element top relative to scroll position
          // Consider the section active if its top is within ~100px from the top of viewport
          const elementTop = element.offsetTop - 100;
          if (scrollPosition >= elementTop) {
            currentSection = id;
            foundSection = true;
            break;
          }
        }
      }

      // Default to home if scrolled near top
      if (!foundSection && scrollPosition < windowHeight / 3) {
         currentSection = 'home';
      }

      setActiveSection(currentSection || 'home');
    };

    // Debounce scroll handler
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
    // Removed sticky positioning, shadow, and explicit height
    <header className="w-full bg-gray-900 text-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center min-h-[60px]">
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
        {/* Mobile menu slides down from the header */}
        <nav className={`absolute md:relative top-[60px] left-0 w-full md:top-0 md:w-auto bg-gray-900 md:bg-transparent z-40 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'} md:translate-y-0 md:shadow-none md:block`}>
           <ul className="flex flex-col md:flex-row md:items-center px-4 py-4 md:px-0 md:py-0 gap-y-2 md:gap-y-0 md:gap-x-1 lg:gap-x-3"> {/* Added gap-x for desktop */}
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.startsWith('#') ? item.href.substring(1) : null;
              const isActive = sectionId === activeSection;
              // Refined styling: Added bottom border for active link, subtle hover
              const linkClasses = `relative py-2 md:py-1 px-3 block whitespace-nowrap transition-colors duration-200 font-medium ${isActive ? 'text-red-500' : 'text-gray-300 hover:text-white'}`;
              // External link button style
              const externalLinkClasses = "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 inline-block text-sm";

              if (item.isExternal) {
                return (
                  <li key={item.href} className="md:ml-2"> {/* Adjusted margin */}
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
                 // Style page links similarly to section links
                return (
                  <li key={item.href} className="md:ml-2 relative"> {/* Added relative for pseudo-element */}
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={linkClasses}
                      aria-current={isActive ? 'page' : undefined} // Better accessibility
                    >
                      {item.label}
                       {/* Simulate active border */}
                      {isActive && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 h-[3px] bg-red-600 rounded-t-sm"></span>}
                    </Link>
                  </li>
                );
              } else {
                // Internal section link
                return (
                  <li key={item.href} className="md:ml-2 relative"> {/* Added relative for pseudo-element */}
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={linkClasses}
                      aria-current={isActive ? 'page' : undefined} // Better accessibility
                    >
                      {item.label}
                      {/* Simulate active border */}
                      {isActive && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 h-[3px] bg-red-600 rounded-t-sm"></span>}
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