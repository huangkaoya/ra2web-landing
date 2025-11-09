"use client";

import { useState } from 'react';

interface FriendlyLink {
  name: string;
  url: string;
  description?: string;
}

export default function FooterContent() {
  // 友情链接数据
  const links: FriendlyLink[] = [
    { name: "盼之游戏交易", url: "https://www.pzds.com/?pzfrom=RWKTDJ", description: "领先的游戏交易代售网站" },
    { name: "共和国之辉", url: "https://www.gongheguozhihui.com", description: "共和国之辉官网" },
    { name: "红警2重聚未来", url: "https://www.yra2.com", description: "红警2重聚未来官网" },
    { name: "王二火大", url: "https://www.wangerhuoda.com", description: "王二火大官网" },
    { name: "Bun中文网", url: "https://bun.sh.cn", description: "Bun中文网" },
    { name: "狗狗币官网", url: "https://www.dogecoin.com", description: "狗狗币官网" },
    { name: "心灵终结", url: "https://mentalomega.com", description: "心灵终结官网" },
    { name: "OpenRA", url: "https://www.openra.net", description: "OpenRA官网" }
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const displayedLinks = isExpanded ? links : links.slice(0, 4);

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-7">
      {/* 政策链接部分 */}
      <div className="policy-links mb-4">
        <p className="text-[#a9abad] text-[13px] flex items-center justify-center flex-wrap gap-1">
          <a href="/privacy" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">隐私政策</a> 
          <span className="text-[#a9abad]">|</span>
          <a href="/cookies" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">Cookie政策</a> 
          <span className="text-[#a9abad]">|</span>
          <a href="/tos" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">服务条款</a> 
          <span className="text-[#a9abad]">|</span>
          <a href="mailto:contact@chronodivide.com" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">联系我们</a>
        </p>
      </div>
      
      {/* 法律声明部分 */}
      <div className="legal-info mb-6">
        <p className="text-[13px] text-[#a9abad]">法律声明：RA2WEB® 是 RA2WEB LTD 的注册商标，红色井界™ 王二火大™ 网页红井™ 及 &quot;红围巾鸟&quot;卡通形象 是 RA2WEB LTD 的商标，受法律保护。红色警戒®是美国艺电公司的注册商标，受法律保护，页面展示仅用于说明背景，无侵权意图。游戏为非盈利作品，使用部分红色警戒®美术素材，无侵权意图，目前正在逐步替换中。</p>
        <p className="text-[13px] text-[#a9abad] mt-2">Copyright © {new Date().getFullYear()} RA2WEB</p>
      </div>
      
      {/* 友情链接部分 */}
      <div className="friendly-links border-t border-[#444444] pt-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-[1px] bg-[#444444]"></div>
          <h3 className="text-[15px] uppercase text-[#888888] font-semibold mx-4">友情链接</h3>
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
            {isExpanded ? '收起' : '更多链接'}
          </button>
        )}
      </div>
    </div>
  );
} 