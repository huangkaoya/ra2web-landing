"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsTag from './NewsTag';
import RichText from '@/i18n/RichText';
import { useI18n } from '@/i18n/LocaleProvider';
import { formatDate } from '@/i18n/format';

export default function About() {
  const { locale, m } = useI18n();
  const [activeTab, setActiveTab] = useState('news');
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    if (activeTab === 'news') {
      fetch(`/api/news?limit=3`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setNews(data);
        })
        .catch(err => console.error('Fetch news failed', err));
    }
  }, [activeTab]);
  
  return (
    <section 
      id="about" 
      className="py-16 bg-[#081522] text-[#e8f1f8]"
    >
      <div className="container mx-auto px-4 max-w-[1100px]">
        <h2 className="text-4xl md:text-[50px] font-normal uppercase font-['Oswald',sans-serif] leading-[60px] text-center mb-8">{m.about.title}</h2>
        {m.about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-center max-w-3xl mx-auto mb-4 text-[#b9c7d4] last:mb-8">
            <RichText text={paragraph} />
          </p>
        ))}
        
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ul className="inline-flex">
              <li className="inline-block">
                <button
                  className={`text-[18px] font-normal px-10 py-3.5 uppercase transition-colors cursor-pointer rounded-none ${
                    activeTab === 'news'
                      ? 'bg-[#ff9408] text-white border border-[#ff9408]'
                      : 'text-[#9eb1c3] border border-[#2a4660] hover:bg-[#ff9408] hover:text-white hover:border-[#ff9408]'
                  }`}
                  onClick={() => setActiveTab('news')}
                >
                  {m.about.tabNews}
                </button>
              </li>
              <li className="inline-block -ml-[2px]">
                <button
                  className={`text-[18px] font-normal px-10 py-3.5 uppercase transition-colors cursor-pointer rounded-none ${
                    activeTab === 'specs'
                      ? 'bg-[#ff9408] text-white border border-[#ff9408]'
                      : 'text-[#9eb1c3] border border-[#2a4660] hover:bg-[#ff9408] hover:text-white hover:border-[#ff9408]'
                  }`}
                  onClick={() => setActiveTab('specs')}
                >
                  {m.about.tabSpecs}
                </button>
              </li>
            </ul>
          </div>
          
          <div className="tab-content pb-16">
            {activeTab === 'news' && (
              <div className="space-y-4">
                {news.length > 0 ? (
                  <div className="flex flex-col border-t border-[#1d3953]">
                    {news.map((item) => (
                      <Link 
                        key={item.id} 
                        href={`/news/${item.slug}`} 
                        className="group flex flex-col sm:flex-row sm:items-center justify-between py-4 px-2 border-b border-[#1d3953] hover:bg-[#10243a] transition-all rounded-none"
                      >
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <NewsTag category={item.category || '公告'} />
                          <h4 className="text-base font-bold text-[#f3f7fb] group-hover:text-[#ff9408] transition-colors truncate">
                            {item.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-[#8197aa] mt-2 sm:mt-0 shrink-0">
                          <span className="font-mono">{formatDate(item.published_at, locale)}</span>
                          <span className="text-[#ff9408] font-bold group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="md:w-[43.63%] mb-10 md:mb-0 md:float-left">
                      <div className="relative ml-0 md:ml-6">
                        <Image 
                          src="/img/lobby-main.jpg" 
                          alt={m.about.lobbyAlt} 
                          width={600}
                          height={400}
                          className="shadow-lg border border-[#274763] bg-[#0d1e31] p-2.5 rounded-none"
                        />
                      </div>
                    </div>
                    <div className="md:w-[54.3%] md:float-right text-left">
                      <h3 className="text-2xl md:text-[24px] font-bold uppercase text-white leading-7">{m.about.progressTitle}<span className="block text-sm font-normal text-[#ff9000] mt-1">{m.about.progressStatus}</span></h3>
                      <p className="pt-7 pb-5 text-[#aebdca] leading-6">{m.about.progressBody}</p>
                      <p className="text-[#aebdca] leading-6">
                        {m.about.progressBefore}<Link href="/news" className="text-[#ff9408] hover:text-[#ff9408] hover:underline">{m.about.progressLink}</Link>{m.about.progressAfter}
                      </p>
                    </div>
                    <div className="clear-both"></div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-[43.63%] mb-10 md:mb-0 md:float-left">
                  <div className="relative ml-0 md:ml-6">
                    <Image 
                      src="/img/lobby-main.jpg" 
                      alt={m.about.lobbyAlt} 
                      width={600}
                      height={400}
                      className="shadow-lg border border-[#274763] bg-[#0d1e31] p-2.5"
                    />
                  </div>
                </div>
                <div className="md:w-[54.3%] md:float-right text-left">
                  <h3 className="text-2xl md:text-[24px] font-bold uppercase text-white leading-7">{m.about.specsTitle}</h3>
                  <ul className="list-disc pl-5 text-[#aebdca] pt-7 space-y-4">
                    {m.about.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="clear-both"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 
