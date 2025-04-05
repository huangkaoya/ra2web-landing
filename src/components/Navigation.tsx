"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Define section IDs for scroll spying
const SECTION_IDS = ['home', 'about', 'features', 'community', 'media', 'donate', 'play'];
// Define navigation items
const NAV_ITEMS = [
  { href: '#home', label: '首页' },
  { href: '#features', label: '核心特色' },
  { href: '#community', label: '社区' },
  { href: '#media', label: '频道' },
  { href: '/patch-notes', label: '更新说明', isPageLink: true },
  { href: 'https://game.ra2web.com/', label: '点此开玩！', isExternal: true },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

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
          top: elementPosition - (isScrolled ? 56 : 102), // 修正高度为102px (小版本为56px)
          behavior: 'smooth'
        });
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // 设置header是否显示为较小版本
      setIsScrolled(scrollPosition > 50);

      // 滚动监听逻辑 - 判断哪个部分在视口内
      // 阈值为视口高度的40%
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.4;

      // 从底部向上遍历，找到第一个在阈值以上的section
      let currentSection = '';
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop < scrollThreshold) {
            currentSection = id;
            break;
          }
        }
      }

      // 如果页面顶部，默认选中home
      if (scrollPosition < viewportHeight * 0.3) {
        currentSection = 'home';
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // 使用防抖处理滚动事件
    let timeoutId: NodeJS.Timeout | null = null;
    const debouncedScrollHandler = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    handleScroll(); // 初始检查

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'h-[56px] bg-black/75' : 'h-[102px] bg-black/50'}`}>
      <div className="container mx-auto px-4 max-w-[1100px] h-full flex justify-center items-center">
        <Link 
          href="/#home" 
          onClick={(e) => handleNavClick(e, '#home')} 
          className={`site-logo bg-contain bg-no-repeat bg-left-top transition-all duration-500 ${isScrolled ? 'w-[106px] h-[50px] mt-[3px]' : 'w-[158px] h-[75px] mt-[15px]'} mr-auto`}
          style={{ backgroundImage: "url('/img/logo.png')" }}
          aria-label="返回首页"
        />

        {/* 移动端菜单按钮 */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-2">
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* 导航菜单 */}
        <nav className={`absolute md:static top-full left-0 w-full md:w-auto md:ml-auto bg-black/95 md:bg-transparent z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'} md:translate-y-0 md:shadow-none md:block`}>
          <ul className="md:flex md:flex-row list-none m-0">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.startsWith('#') ? item.href.substring(1) : null;
              const isActive = sectionId === activeSection;

              if (item.isExternal) {
                return (
                  <li key={item.href} className={`md:float-left m-0 p-0 relative ${isScrolled ? 'md:h-[56px]' : 'md:h-[102px]'} transition-all duration-500 group`}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`relative block font-normal font-['Open_Sans'] text-base text-white no-underline ${isScrolled ? 'md:py-[16px] md:px-[20px]' : 'md:pt-[42px] md:pb-[33px] md:px-[20px]'} h-full transition-all duration-300`}
                    >
                      {item.label}
                      <span 
                        className="absolute inset-0 z-[-10] border-b-[5px] border-[#ff9000] transition-opacity duration-500 bg-gradient-to-b from-[#57120d] to-[#FF5722] opacity-0 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                );
              } else {
                // 内部链接 (section或页面)
                const Tag = item.isPageLink ? Link : 'a';
                return (
                  <li 
                    key={item.href} 
                    className={`md:float-left m-0 p-0 relative ${isScrolled ? 'md:h-[56px]' : 'md:h-[102px]'} transition-all duration-500 group ${isActive ? 'active' : ''}`}
                  >
                    <Tag
                      href={item.href}
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={`relative block font-normal font-['Open_Sans'] text-base text-white no-underline ${isScrolled ? 'md:py-[16px] md:px-[20px]' : 'md:pt-[42px] md:pb-[33px] md:px-[20px]'} h-full transition-all duration-300`}
                    >
                      {item.label}
                      <span 
                        className={`absolute inset-0 z-[-10] border-b-[5px] border-[#ff9000] transition-opacity duration-500 bg-gradient-to-b from-[#57120d] to-[#FF5722] opacity-0 group-hover:opacity-100 ${isActive ? '!opacity-100' : ''}`}
                      />
                    </Tag>
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