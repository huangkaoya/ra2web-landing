"use client";

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '@/i18n/LocaleProvider';

const LINK_URLS = [
  "https://www.pzds.com/?pzfrom=RWKTDJ",
  "https://www.gongheguozhihui.com",
  "https://www.wangerhuoda.com",
  "https://bun.sh.cn",
  "https://www.dogecoin.com",
  "https://www.openra.net",
  "https://www.wanjiadongli.com",
];

export default function FooterContent() {
  const { m } = useI18n();
  const links = m.footer.links.map((link, index) => ({
    ...link,
    url: LINK_URLS[index],
  }));

  const [isExpanded, setIsExpanded] = useState(false);
  const displayedLinks = isExpanded ? links : links.slice(0, 4);

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-7">
      <div className="flex justify-center mb-4">
        <LanguageSwitcher />
      </div>
      <div className="policy-links mb-4">
        <p className="text-[#a9abad] text-[13px] flex items-center justify-center flex-wrap gap-1">
          <a href="/privacy" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">{m.footer.privacy}</a> 
          <span className="text-[#a9abad]">|</span>
          <a href="/cookies" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">{m.footer.cookies}</a> 
          <span className="text-[#a9abad]">|</span>
          <a href="/tos" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">{m.footer.tos}</a> 
          <span className="text-[#a9abad]">|</span>
          <a href="mailto:contact@chronodivide.com" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">{m.footer.contact}</a>
        </p>
      </div>
      
      <div className="legal-info mb-6">
        <p className="text-[13px] text-[#a9abad]">{m.footer.legal}</p>
        <p className="text-[13px] text-[#a9abad] mt-2">Copyright © {new Date().getFullYear()} RA2WEB</p>
      </div>
      
      {/* 友情链接部分 */}
      <div className="friendly-links border-t border-[#444444] pt-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-[1px] bg-[#444444]"></div>
          <h3 className="text-[15px] uppercase text-[#888888] font-semibold mx-4">{m.footer.linksTitle}</h3>
          <div className="w-16 h-[1px] bg-[#444444]"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-4">
          {displayedLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#a9abad] hover:text-[#ff9408] transition-colors text-sm no-underline group relative"
              title={link.description}
            >
              {link.name}
              {link.description && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/80 text-white text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {link.description}
                </span>
              )}
            </a>
          ))}
        </div>
        
        {links.length > 4 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-[#a9abad] hover:text-white text-xs border border-[#444444] rounded-full px-3 py-1 hover:border-[#666666] transition-colors"
          >
            {isExpanded ? m.footer.less : m.footer.more}
          </button>
        )}
      </div>
    </div>
  );
} 