"use client";

import Image from 'next/image';

export default function Sponsors() {
  return (
    <section 
      id="sponsors" 
      className="py-16 bg-white text-gray-800"
    >
      <div className="container mx-auto px-4 max-w-[1100px]">
        <h2 className="text-4xl md:text-[50px] font-normal uppercase font-['Oswald',sans-serif] leading-[60px] text-center mb-8">赞助与合作</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
          感谢以下伙伴对红色井界™的支持与合作
        </p>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        
        <div className="sponsors-content">
          {/* 金牌赞助商 */}
          <div className="sponsor-tier mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#ff9408]">金牌赞助商</h3>
            <div className="flex justify-center items-center">
              <a 
                href="https://www.pzds.com/?pzfrom=RWKTDJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sponsor-logo block transition-transform hover:scale-105 duration-300"
              >
                <Image 
                  src="/logo2-2.png" 
                  alt="金牌赞助商" 
                  width={300}
                  height={150}
                  className="max-w-full h-auto"
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
