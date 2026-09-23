"use client";

import Image from 'next/image';
import { useI18n } from '@/i18n/LocaleProvider';

const FEATURE_META = [
  { id: "Card1", accent: "#3aa4d8", iconUrl: "/img/xplatform-icn.png" },
  { id: "Card2", accent: "#ff9408", iconUrl: "/img/network-icn.png" },
  { id: "Card3", accent: "#c04a3b", iconUrl: "/img/modern-icn.png" },
  { id: "Card4", accent: "#8ea0ad", iconUrl: "/img/mod-icn.png" },
];

export default function Features() {
  const { m } = useI18n();
  const featureItems = FEATURE_META.map((meta, index) => ({
    ...meta,
    ...m.features.items[index],
  }));

  return (
    <section 
      id="features" 
      className="relative overflow-hidden py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: 'url("/img/Features-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#06111d]/25"></div>
      <div className="container relative mx-auto px-4 max-w-[1100px]">
        <h2 className="text-4xl md:text-[50px] font-normal uppercase font-['Oswald',sans-serif] leading-[60px] text-center mb-8">{m.features.title}</h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        
        <div className="Featureside pt-12 pb-4 w-full">
          <ul className="grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {featureItems.map((item) => (
              <li 
                key={item.id} 
                className="group relative min-h-[360px] overflow-hidden rounded-[4px] border border-[#28455f] bg-[#07131f]/78 px-5 pb-8 pt-9 text-center shadow-[0_20px_55px_rgba(0,0,0,0.32)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-[#416580] hover:bg-[#0b1d2f]/88"
              >
                <span className="absolute left-0 top-0 h-[3px] w-full" style={{ backgroundColor: item.accent }}></span>
                <span className="absolute inset-x-7 top-0 h-24 opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-25" style={{ backgroundColor: item.accent }}></span>
                
                <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <span className="absolute h-16 w-16 rounded-full opacity-20 blur-xl" style={{ backgroundColor: item.accent }}></span>
                  <Image
                    src={item.iconUrl}
                    alt=""
                    width={76}
                    height={76}
                    className="relative h-[76px] w-[76px] object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
                  />
                </div>

                <div className="relative">
                  <h4 className="mb-4 text-[20px] font-normal uppercase leading-7 text-white">{item.title}</h4>
                  <div className="mx-auto mb-5 h-px w-12" style={{ backgroundColor: item.accent }}></div>
                  <p className="text-[15px] leading-7 text-[#c2ced9]">
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 
