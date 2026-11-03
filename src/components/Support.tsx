"use client";

import DonorList from './DonorList';
import { useI18n } from '@/i18n/LocaleProvider';
import BrandText from '@/i18n/BrandText';

export default function Support() {
  const { m } = useI18n();

  return (
    <section 
      id="donate" 
      className="py-16 bg-[#0d2033] text-[#e8f1f8] border-y border-[#18334d]"
    >
      <div className="container mx-auto px-4 max-w-[1100px] text-center">
        <h2 className="text-4xl md:text-[50px] font-normal uppercase font-['Oswald',sans-serif] leading-[60px] text-center mb-8"><BrandText text={m.support.title} /></h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto"></div>
        <DonorList />
      </div>
    </section>
  );
}
